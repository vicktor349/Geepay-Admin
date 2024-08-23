import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SideNavbar from "@/components/SideNavbar";
import Sales from "@/components/Sales";
import Sale from "@/components/Sale";

const inter = Inter({ subsets: ["latin"] });

export default function Home()
{
  return (
    <>
      <Head>
        <title>Admin | Home</title>
      </Head>
      <main className={`${inter.className} relative`}>
        <Navbar />
        <SideNavbar />
        <div className="absolute sssm:left-[8px] ssms:left-[10px] sm:left-[90px] md:left-[100px] lg:left-[110px] xl:left-[80px] top-36 xl:w-[calc(100%-80px)] flex justify-center">
          <div className="flex justify-center w-full flex-col xl:flex-row xl:space-x-6">
            <Sales />
            <Sale />
          </div>
        </div>
      </main>
    </>
  );
}
