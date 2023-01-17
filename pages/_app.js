import "@/styles/globals.css";

//Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
