import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
// for displaying mdx contents [markdown]
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
// For code block syntax hightlight
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
// May add Latex support later...

// SEO support
import { NextSeo } from "next-seo";
import { ArticleJsonLd } from "next-seo";

const PlogPage = ({ frontMatter, source, slug }) => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <ArticleJsonLd
        type="Blog"
        title={frontMatter.title}
        url={`https://www.louisunlimited.com/blogs/${slug}`}
        datePublished={frontMatter.date}
        dateModified={frontMatter.date}
        authorName="Louis Qian"
        description={frontMatter.description}
        images={[frontMatter.image]}
      />
      <div className="pt-24 h-full max-w-[1140px] mx-auto text-lg">
        <div className="p-5">
          <h2 className="pb-5">{frontMatter.title}</h2>
          <p className="w-max">Written by: {frontMatter.author}</p>
          <p> Date: {frontMatter.date}</p>
          <p className="text-slate-500">
            {frontMatter.tags.toString().replaceAll(",", " · ")}
          </p>
        </div>
        <div className="p-5">
          <MDXRemote {...source} />
        </div>
        <Link href="/blog">
          <a className="p-5 underline cursor-pointer w-max">
            Back to all posts
          </a>
        </Link>
        <div className="p-5 text-right">
          <p className="">Written by: {frontMatter.author}</p>
          <p> Date: {frontMatter.date}</p>
        </div>
      </div>
    </>
  );
};

export default PlogPage;

// Since we are using slug, use getStaticPaths to get slug paths for routes
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  const paths = files.map((file) => ({
    params: {
      // take filename only, without extension
      slug: file.split(".")[0],
    },
  }));

  return {
    paths,
    // build only the paths returned by getStaticPaths
    fallback: false,
  };
}

// Again, use getStaticProps to render static contents, use params to get filename since we got getStaticPaths
export async function getStaticProps({ params }) {
  const postFilePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath, "utf8");
  // After reading the file, we're able to get content & data from mdx file using gray-matter
  const { content, data } = matter(fileContents);
  // 'serialize' runs server-side, prepares the content for <MDXRemote/>
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      // Passes in rehypeHightlight for code-highlighting
      rehypePlugins: [rehypeHighlight],
    },
  });
  // Now we can return these props for page use.
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  };
}
