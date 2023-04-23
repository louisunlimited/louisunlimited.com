import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlausibleProvider
        domain="louisunlimited.com"
        selfHosted={true}
        customDomain="https://analytics.louisunlimited.com"
      >
        <Component {...pageProps} />;
      </PlausibleProvider>
    </>
  );
}
