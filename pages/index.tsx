/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import Head from "next/head";
import { Banner } from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div className=" bg-[#eff7fa]">
      <Head>
        <title>ISMAEL DIAZ | Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className="mx-auto md:max-w-7xl"
        style={{ scrollBehavior: "smooth" }}
      >
        <Hero />
        <Banner />
        <Projects />
        <Contact />

        <Footer />
      </main>
    </div>
  );
}
