// @ts-nocheck
import "tailwindcss/tailwind.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps}) => {
  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-red-500">test</div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
