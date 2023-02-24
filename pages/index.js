import Head from "next/head";
import LandingPage from "../components/LandingPage";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Louis Qian | Developer</title>
      </Head>

      <LandingPage />

      <Skills />
    </div>
  );
}
