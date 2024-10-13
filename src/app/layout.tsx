import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ['400'] })

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
        className={`${inter.className} bg-gray-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
