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

  metadataBase: new URL(
    "https://premium-route-diagnosis2.vercel.app"
  ),

  title:
    "【28卒】プレミアルート診断｜あなたに合う企業を見つけよう",

  description:
    "全32問の価値観診断で、あなたにマッチする企業をランキング形式で表示。レーダーチャートによる価値観分析付き。",

  openGraph: {

    title:
      "【28卒】プレミアルート診断",

    description:
      "あなたの価値観を可視化し、相性の良い企業を診断します。",

    url:
      "https://premium-route-diagnosis2.vercel.app",

    siteName:
      "プレミアルート診断",

    locale:
      "ja_JP",

    type:
      "website",

    images: [

      {
        url: "/ogp.jpg",

        width: 1200,

        height: 630,

        alt:
          "プレミアルート診断",
      },

    ],

  },

  twitter: {

    card:
      "summary_large_image",

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
      lang="jp"
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
