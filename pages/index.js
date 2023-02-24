import Head from "next/head";
import LandingPage from "../components/LandingPage";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Louis Qian | Developer</title>
        <script
          defer
          data-domain="louisunlimited.com"
          src="http://139.144.30.47:8000/js/script.js"
        ></script>
      </Head>

      <LandingPage />

      <Skills />
    </div>
  );
}
