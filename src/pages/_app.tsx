import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="app-container">
      <Navigation />

      <motion.div
        key={router.route}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Component {...pageProps} />
      </motion.div>

      <Footer />
    </div>
  );
}
