import "../styles/globals.css";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PlausibleProvider
        domain="louisunlimited.com"
        selfHosted={true}
        customDomain="http://louisearch.com:8000"
      >
        <DefaultSeo {...SEO} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </PlausibleProvider>
    </>
  );
}

export default MyApp;
