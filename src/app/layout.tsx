import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Humanize AI Text: Undetectable AI Humanizer & Rewriter | MyDetector",
  description: "Transform AI-generated text from ChatGPT, Bard, and Claude into natural, human-like content. Our advanced rewriter ensures your work remains authentic and undetectable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
