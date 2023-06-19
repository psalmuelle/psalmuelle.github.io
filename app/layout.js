'use client'
import "@/styles/global.css";
import {  Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {usePathname} from 'next/navigation'

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Erinle Samuel",
  description:
    "My name is Sam, A fullStack Developer with Experience in Reactjs, Nextjs, NodeJs, ExpressJs.",
};

export default function RootLayout({ children }) {
  const currentRoute = usePathname()
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Nav activeLink={currentRoute}/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
