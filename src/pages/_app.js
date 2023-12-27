import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import "../styles/global.scss";

import { PrismicProvider } from "@prismicio/react";
import { client } from "../services/prismic";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <SSRProvider>
        <Header />
        <PrismicProvider client={client}>
          <Component {...pageProps} />
        </PrismicProvider>
        <Footer />
      </SSRProvider>
    </>
  );
}

export default MyApp;
