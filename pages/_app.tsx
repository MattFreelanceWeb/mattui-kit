import Website_footer from "@/components/footer/Website_footer";
import Website_navbar from "@/components/navigation/Website_navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Website_navbar />
      <Component {...pageProps} />
      <Website_footer />
    </>
  );
}
