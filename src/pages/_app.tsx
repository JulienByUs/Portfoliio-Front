import '../styles/globals.css';
import '../scripts/global.js';
import type { AppProps } from 'next/app';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="overflow-y-hidden">
          <Header />
          <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
          >
          <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
      </div>
  );
}

export default MyApp;