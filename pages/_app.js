import "../styles/globals.css";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
