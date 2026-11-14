import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Ahmed Mohamed | Senior Software Engineer", description: "Ahmed Mohamed — Senior Software Engineer & Founder of Lunaro Digital Solutions." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
