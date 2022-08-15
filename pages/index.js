import Head from "next/head";
import LandingPage from "../components/LandingPage";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Louis Qian | Developer</title>
      </Head>

      {/* <Navbar /> */}

      <LandingPage />

      <Skills />

      <Footer />
    </div>
  );
}
