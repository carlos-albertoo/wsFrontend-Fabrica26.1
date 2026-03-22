import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rick and Morty Characters Viewer",
    template: "%s | Rick and Morty Characters Viewer",
  },
  description: "Catalogo completo dos personagens de Rick and Morty.",
  metadataBase: new URL("https://rickandmortyapi.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="https://img.icons8.com/plasticine/512/rick-sanchez.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
