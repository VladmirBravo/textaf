import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import Head from "next/head";
import Carrousell from "./Carousel";

import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function Marcas({ content }) {
  return (
    <>
      <Head>
        <title>Marcas - Home</title>
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
          <Carrousell IM1={content.IM1} IM2={content.IM2} IM3={content.IM3}/>
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

  const { 
    topimage, 
    logoimage, 
    hometextdescricao, 
    carrousel1, 
    carrousel2,
    carrousel3 } = response.data;

  const content = {
    //header_logo: textaf_logo.url,
    bannerImage: topimage.url,
    imagemCentro: logoimage.url,
    discricao: RichText.asText(hometextdescricao),
    IM1:carrousel1.url,
    IM2:carrousel2.url,
    IM3:carrousel3.url
  };
  return {
    props: {
      content,
    },
    revalidate: 60 * 2, // A pagina será regerada a cada 2 minutos
  };
};
