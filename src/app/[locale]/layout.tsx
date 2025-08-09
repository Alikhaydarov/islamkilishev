import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { HydrationContext, Client, HydrationProvider } from "react-hydration-provider";
import Provider from "./provider";// import { Providers} from "./providers";
// import Header from "@/components/header";
import Hero from '../../components/hero';
import { NextIntlClientProvider, useMessages } from 'next-intl';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASTROMARCUS_IK",
  description: "VENI ,VIDI ,VICI",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {

    locale: string;
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  
  const messages = useMessages()

  return (
    <html lang={locale} className={inter.className}>
  <body className="relative dark:bg-black bg-white">
    {/* Gradient Blur Balls */}
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute bg-[#a78bfa] dark:bg-[#7c3aed] h-96 w-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-[-100px] left-[-100px]" />
      <div className="absolute bg-[#f472b6] dark:bg-[#db2777] h-96 w-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-[200px] right-[-150px]" />
      <div className="absolute bg-[#60a5fa] dark:bg-[#2563eb] h-96 w-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 bottom-[-150px] left-[150px]" />
    </div>

    <ThemeProvider defaultTheme="system" attribute="class">
      <HydrationProvider>
        <Client>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Client>
      </HydrationProvider>
    </ThemeProvider>
  </body>
</html>

  );
}
