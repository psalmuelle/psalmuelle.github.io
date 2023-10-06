"use client";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const currentRoute = usePathname();
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <main className='relative'>
          <div className='backlay'>
            <h1 className=' font-serif'>
              {currentRoute === "/" ? "ES." : ""}
              {currentRoute === "/about" ? "About Me" : ""}
              {currentRoute === "/projects" ? "My Projects" : ""}
              {currentRoute === "/blog" ? "My Articles" : ""}
              {currentRoute === "/contact" ? "Contact Me" : ""}
            </h1>
          </div>
          <Nav activeLink={currentRoute} />
          <div className='pt-32 px-5 max-xl:px-[5%] xl:pl-80 xl:pr-8 max-xl:pb-20'>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
