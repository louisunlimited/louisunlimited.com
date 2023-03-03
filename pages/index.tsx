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
          src="http://ec2-3-141-7-122.us-east-2.compute.amazonaws.com/js/script.js"
        ></script>
      </Head>

      <LandingPage />

      <Skills />
    </div>
  );
}
