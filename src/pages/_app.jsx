// @ts-nocheck
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/compoents/layouts/Layout";

const MyApp = ({ Component, pageProps}) => {
  return(
	<>
		{/* meta data */}
		<Head>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
  );
}

export default MyApp;
