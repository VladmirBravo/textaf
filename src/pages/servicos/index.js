import Head from "next/head";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function Servicos() {
  return (
    <>
      <Head>
        <title>TEXTAF | Serviços</title>
      </Head>

      <Image width="100%" alt="" src="/svg/servicos.webp"></Image>
      <br />
      <br />
      <section className={styles.ctaText}>
        <p>
          A TEXTAF presta vários tipos de serviços especializados, a outras
          empresas. Os serviços prestados podem ser de acabamentos em diferentes
          suportes técnicos, de tecelagem, de estamparia, tinturaria e confeção,
          gerindo a totalidade ou parte do processo, conforme solicitação do
          cliente.
        </p>
      </section>
      <br />
      <br />
    </>
  );
}
