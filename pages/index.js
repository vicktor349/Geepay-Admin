import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SideNavbar from "@/components/SideNavbar";
import Sales from "@/components/Sales";
import Sale from "@/components/Sale";
import OrderTable from "@/components/OrderTable";
import TopPlatform from "@/components/TopPlatform";

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
        <div className="absolute ssm:left-[8px] sssm:left-[8px] ssms:left-[10px] sm:left-[90px] md:left-[100px] lg:left-[110px] xl:left-[80px] top-36 xl:w-[calc(100%-80px)] flex flex-col">
          <div className="flex justify-center w-full flex-col xl:flex-row xl:space-x-4">
            <Sales />
            <Sale />
          </div>
          <div className="flex ml-52 flex-col xl:flex-row xl:space-x-4 mt-4">
            <OrderTable />
            <TopPlatform />
          </div>
        </div>
      </main>
    </>
  );
}
