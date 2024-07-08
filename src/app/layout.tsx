import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/shared/ui/Header";

const fonts = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MYG",
  description: "Your game platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    { title: "Profile", pathName: "/profile" },
    { title: "Search", pathName: "/search" },
  ];

  return (
    <html lang="en">
      <body className={fonts.className}>
        <Header links={links}/>

        {children}
        </body>
    </html>
  );
}
