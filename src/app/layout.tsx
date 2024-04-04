import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/css/tailwind.css";
import Header from "@/components/nav/header";
import Footer from "@/components/nav/footer";
import { MY_DOMAIN } from "@/constant/domain";
import { defaultOpenGraph, defaultTwitter } from "@/constant/meta-data";

const notoSans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(MY_DOMAIN),
  title: "OU's PLAYGROUND",
  description: "호기심을 담아서",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    ...defaultOpenGraph,
  },
  twitter: {
    ...defaultTwitter,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`bg-black text-slate-50 ${notoSans.className} max-w-dvw overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
