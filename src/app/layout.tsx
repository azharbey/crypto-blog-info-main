import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "@/providers/theme-provider";
import NextAuthProviders from "@/providers/next-auth-provider";
import GlobalState from "@/context";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BTC_Information",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <NextThemeProvider>
          <NextAuthProviders>
            <GlobalState>
              <Header/>
            
              {children}
            </GlobalState>
          </NextAuthProviders>
        </NextThemeProvider>
      </body>
    </html>
  );
}
