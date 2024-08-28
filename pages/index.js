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
      <main className={`${inter.className} flex flex-col`}>
        <Navbar />
        <div className="flex flex-1">
          <SideNavbar />
          <div className="flex-1 flex flex-col ssm:p-2 sm:p-4">
            <div className="flex flex-col xl:flex-row xl:space-x-4 mt-28 justify-center">
              <Sales />
              <Sale />
            </div>
            <div className="flex flex-col xl:flex-row xl:space-x-4 mt-4 justify-center">
              <OrderTable />
              <TopPlatform />
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
