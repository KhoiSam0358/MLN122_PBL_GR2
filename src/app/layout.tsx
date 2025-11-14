import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import 'antd/dist/reset.css';
import Navbar from "@/components/Navbar";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hands & Minds – The Future of Labor",
  description: "Mối quan hệ giữa lao động trí óc và lao động chân tay trong kỷ nguyên trí thức",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={beVietnamPro.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
