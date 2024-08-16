import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SideNavbar from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home()
{
  return (
    <>
      <Head>
        <title>GeePay | Home</title>
      </Head>
      <main className={`${inter.className}`}>
        <Navbar />
        <SideNavbar />
      </main>
    </>
  );
}
