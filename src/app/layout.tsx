import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlexGallery",
  description: "Created by Sharoon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} dark relative`} >
        <Navbar />
        <Sidebar/>
        <div className="flex justify-between flex-row overflow-x-hidden">
          <div className="hidden md:block w-[300px] flex-none"></div> {/*yeh div srf iss liya lagayi hai taka jo side-bar width le rha hai utni hi yebi width lay or children and iss div ko flex ma rakh diya taka "children" jo hai wo proper show ho even after loading  */}
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
