import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
