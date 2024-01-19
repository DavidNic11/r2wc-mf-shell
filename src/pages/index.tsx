import Head from "next/head";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// @ts-ignore
const Header = dynamic(() => import("header/scene"));

// @ts-ignore
const Services = dynamic(() => import("services/scene"));

export default function Home() {
  return (
    <>
      <Head>
        <title>MF Shell Example</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Services />
    </>
  );
}

export const getServerSideProps = () => {
  return { props: {} };
};
