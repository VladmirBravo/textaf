import Head from "next/head";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function MarcasPropias() {
  return (
    <>
      <Head>
        <title>TEXTAF | Marcas Propias</title>
      </Head>

      <Image width="100%" alt="" src="/svg/marcas.webp"></Image>
      <br />
      <br />
      <section className={styles.ctaText}>
        <p>
          A produção para marcas de terceiros de referência nacional e
          internacional, é a área estratégica de negócio mais importante para a
          empresa. Nos dias de hoje cada mercado, cada marca e cada cliente tem
          as suas especificações, a TEXTAF procura assim que a aposta em Design
          e Inovação sejam uma constante, para que de alguma forma a empresa
          consiga dar um valor acrescentado ao negócio
        </p>
      </section>
      <br />
      <br />
    </>
  );
}
