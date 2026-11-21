import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title:
    "【28卒】プレミアルート診断｜あなたに合う企業を見つけよう",

  description:
    "全32問の価値観診断で、あなたにマッチする企業をランキング形式で表示。",

  openGraph: {

    title:
      "【28卒】プレミアルート診断",

    description:
      "価値観分析であなたに最適な企業を診断。",

    images: [
      "/ogp.jpg",
    ],

    type: "website",

  },

  twitter: {

    card: "summary_large_image",

    title:
      "【28卒】プレミアルート診断",

    description:
      "価値観分析であなたに最適な企業を診断。",

    images: [
      "/ogp.jpg",
    ],

  },

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
  className="
    antialiased

    selection:bg-indigo-500
    selection:text-white
  "
>
  
  {children}
</body>

    </html>
  );
}
