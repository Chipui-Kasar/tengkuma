import Navigation from "@/components/navigation/navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Navigation />
      <div style={{ padding: "80px 0 0 0", zIndex: 0, overflowY: "scroll" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
