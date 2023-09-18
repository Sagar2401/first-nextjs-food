"use client";
import { store } from "@/Store";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { saveState } from "@/Store/browser-storage";
import { debounce } from "debounce";
const inter = Inter({ subsets: ["latin"] });

 const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  store.subscribe(
    // we use debounce to save the state once each 800ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <Provider store={store}>{children}</Provider>
        </CookiesProvider>
      </body>
    </html>
  );
}