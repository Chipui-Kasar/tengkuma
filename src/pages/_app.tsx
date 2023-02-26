import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="app-container">
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
