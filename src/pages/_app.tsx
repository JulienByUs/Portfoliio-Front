import '../styles/globals.css';
import '../scripts/global.js';
import type { AppProps } from 'next/app';
import Header from "@/components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="overflow-y-hidden">
          <Header />
          <Component {...pageProps} />
      </div>
  );
}

export default MyApp;