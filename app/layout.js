import "@/styles/global.css";
import { Fira_Sans } from "next/font/google";
import Nav from "@/components/Nav";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Erinle Samuel",
  description:
    "My name is Sam, A fullStack Developer with Experience in Reactjs, Nextjs, NodeJs, ExpressJs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${fira_sans.className}`}>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
