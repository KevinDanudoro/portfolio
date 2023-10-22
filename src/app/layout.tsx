import Footer from "@/components/Footer/Footer";
import Topbar from "@/components/Navbar/Topbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "Portfolio website to show my projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(workSans.className, "text-dark-gray")}>
        <header>
          <Topbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
