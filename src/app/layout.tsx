import type { Metadata } from "next";
import "./globals.css"
import { Inter, Calistoga } from "next/font/google"
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-calistoga', weight: ['400'] })

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Full Stack Web Portfolio @ToheedDev",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${inter.className} bg-gray-900 text-white antialiased`}
        className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}
      >
        {children}
      </body>
    </html>
  );
}
