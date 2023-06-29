"use client";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Erinle Samuel",
  description:
    "My name is Sam, A fullStack Developer with Experience in Reactjs, Nextjs, NodeJs, ExpressJs.",
};

export default function RootLayout({ children }) {
  const currentRoute = usePathname();
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <main className='relative'>
          <Nav activeLink={currentRoute} />
          <div className='pt-32 px-5 max-xl:px-[5%] xl:pl-96 '>{children}</div>
          <Footer /> 
        </main>
      </body>
    </html>
  );
}
