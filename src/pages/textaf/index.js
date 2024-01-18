import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import Head from "next/head";

import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import Carrousell from "./Carousel";

export default function Marcas({ content }) {
  return (
    <>
      <Head>
        <title>Marcas - Textaf</title>
      </Head>
      <Image width="100%" alt="" src={content.primeiraimagem}></Image>
      <br />
      <div className={styles.divImg2}>
        <Image alt="" src={content.imagemlogo}></Image>
      </div>
      <div>
        <section className={styles.ctaText}>
          <p>{content.discricao}</p>
        </section>
        <br />
        <br />
        <div>
          <Carrousell IM1={content.IM1} IM2={content.IM2} IM3={content.IM3} />
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const client = Prismic.client("https://textaf.cdn.prismic.io/api/v2");
  const response = await client.getByUID("textafhome", "textaf");

  const { 
    primeiraimagem, 
    imagemlogo, 
    textodescricao, 
    carrousel1, 
    carrousel2,
    carrousel3 } = response.data;

  // console.log();
  const content = {
    //header_logo: textaf_logo.url,
    primeiraimagem: primeiraimagem.url,
    imagemlogo: imagemlogo.url,
    discricao: RichText.asText(textodescricao),
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
