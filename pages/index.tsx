import Head from "next/head";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
// decrease first load js bundle from 330kb to 76kb
const Room = dynamic(() => import("@/components/Room"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#090711" />
      </Head>
      <main className="bg-gradient-to-r from-blue-950 via-gray-950 to-black/90">
        <Navbar />
        <Room />
      </main>
    </>
  );
}
