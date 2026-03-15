import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
