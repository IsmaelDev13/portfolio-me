/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[#eff7fa] scroll-smooth ">
      <Head>
        <title>ISMAEL DIAZ | Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Hero />
      </main>
    </div>
  );
}
