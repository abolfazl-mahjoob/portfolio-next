import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/style/global.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "abolfazl mahjoob",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} w-full h-dvh px-5 bg-slate-100 text-second`}
      >
        {children}
      </body>
    </html>
  );
}
