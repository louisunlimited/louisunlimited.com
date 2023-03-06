import { postFilePath } from "../utils/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
// SEO support
import { NextSeo } from "next-seo";

// `/blog` main route
export default function blog({ posts }) {
  return (
    <>
      <NextSeo
        title="Louis Qian | Blog Posts"
        description="Discover all Louis' blog posts here!"
      />
      <div className="max-w-[1240px] mx-auto h-full pt-24 min-h-screen">
        <h2 className="uppercase p-5 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent w-max">
          Blog Posts
        </h2>
        <div className="h-full w-full px-5">
          {posts.map((post, index) => {
            return (
              <div key={index} className="flex flex-col pt-5">
                <h4 className="text-2xl md:text-3xl font-bold text-slate-200">
                  {post.frontMatter.title}
                </h4>
                <p className="">{post.frontMatter.date}</p>
                <Link href={`/blogs/${post.slug}`}>
                  <p className="underline cursor-pointer w-max">Read More</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// getStaticProps to render static content through filesystem
export async function getStaticProps() {
  const files = postFilePath;
  const posts = files.map((file) => {
    const filePath = path.join(process.cwd(), "posts", file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    // use gray-matter to get frontMatter[no contents on nav page]
    const { data: frontMatter } = matter(fileContents);

    return {
      frontMatter,
      slug: file.split(".")[0],
    };
  });
  // return props {posts -> containg frontMatter}
  return {
    props: { posts },
  };
}
