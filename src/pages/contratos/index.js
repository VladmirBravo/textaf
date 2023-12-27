import Head from "next/head";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function contratos() {
  return (
    <>
      <Head>
        <title>TEXTAF | Contratos</title>
      </Head>

      <Image width="100%" alt="" src="/svg/contratos.webp"></Image>
      <br />
      <br />
      <section className={styles.ctaText}>
        <p>
          Já com uma vasta experiência nesta área a TEXTAF tem vindo a
          desenvolver com o alargamento da gama de produtos e o nível de
          flexibilidade nas quantidades e prazos de entrega.
        </p>
        <br />
        <p>
          Os produtos de têxtil lar, para a área de contratos têm requisitos
          muito específicos, e a empresa consegue, através do laboratório que
          tem agregado ao Departamento de Qualidade, testar e garantir ao
          cliente o grau de resistência às lavagens dos tecidos destinados a
          Hotelaria, Restauração e Hospitais.
        </p>
        <br />
        <p>
          A nossa oferta vai desde o artigo de cama, ao artigo de mesa, banho e
          spa.
        </p>
      </section>
      <br />
      <br />
    </>
  );
}
