import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Dash from "@/components/Dash";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Umax Network</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Dash />
    </>
  );
}
