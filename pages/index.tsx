import Head from "next/head";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
// decrease first load js bundle from 330kb to 76kb
const Room = dynamic(() => import("@/components/Room"), { ssr: false });
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Louis Qian | Developer"
        description="A passionate developer who loves to explore new technologies and build A LOT OF cool stuff."
        canonical="https://louisunlimited.com"
        additionalMetaTags={[
          {
            name: "viewport",
            content:
              "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0",
          },
          {
            name: "theme-color",
            content: "#090711",
          },
          {
            name: "twitter:image",
            content: "https://louisunlimited.com/og_image.png",
          },
          {
            name: "twitter:image:alt",
            content: "Louis Qian | Developer",
          },
          {
            name: "twitter:title",
            content: "Louis Qian | Developer",
          },
        ]}
        openGraph={{
          url: "https://louisunlimited.com",
          title: "Louis Qian | Developer",
          description:
            "A passionate developer who loves to explore new technologies and build A LOT OF cool stuff.",
          type: "website",
          images: [
            {
              url: "https://louisunlimited.com/og_image.png",
              width: 1655,
              height: 1035,
              alt: "Louis Qian | Developer",
            },
          ],
          site_name: "Louis Qian | Developer",
        }}
        twitter={{
          handle: "@louis_unlimited",
          site: "@louis_unlimited",
          cardType: "summary_large_image",
        }}
      />
      <main className="bg-gradient-to-r from-blue-950 via-gray-950 to-black/90">
        <Navbar />
        <Room />
      </main>
    </>
  );
}
