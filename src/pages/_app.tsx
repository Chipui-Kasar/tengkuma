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
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
