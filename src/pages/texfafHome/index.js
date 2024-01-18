import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import Head from "next/head";
import Carrousell from "@/components/Carousel";

import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function Marcas({ content }) {
  return (
    <>
      <Head>
        <title>Marcas</title>
      </Head>

      <Image width="100%" alt="" src="/svg/senhor.webp"></Image>

      <br />
      <div className={styles.divImg2}>
        <Image alt="" src={content.imagemCentro}></Image>
      </div>
      <div>
        <section className={styles.ctaText}>
          <p>{content.discricao}</p>
        </section>
        <br />
        <br />
        <div>
          <Carrousell />
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const client = Prismic.client("https://textaf.cdn.prismic.io/api/v2"); 
  const response = await client.getByUID("textaf", "pagina-principal");

  const { topimage, logoimage, descricaomarca } = response.data;

  const content = {
    //header_logo: textaf_logo.url,
    bannerImage: topimage.url,
    imagemCentro: logoimage.url,
    discricao: RichText.asText(descricaomarca),
  };
  return {
    props: {
      content,
    },
    revalidate: 60 * 2, // A pagina será regerada a cada 2 minutos
  };
};
