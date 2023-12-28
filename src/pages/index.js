import { Image } from "react-bootstrap";
import styles from "../styles/home.module.scss";
import Head from "next/head";
import CarrouselHome from "@/components/CarouselHome";

import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function Home({ content }) {
  // const [document] = usePrismicDocumentByUID('textaf','pagina-principal')
  //console.log(document.data.discricao)
  return (
    <>
      <Head>
        <title>TEXTAF | Home</title>
      </Head>
      <div>
        <CarrouselHome />
      </div>
      <div className={styles.divImg2}>
        <Image alt="" width="20%" src={content.textaf}></Image>
      </div>
      <section className={styles.ctaText}>
        <p>{content.discricao}</p>
      </section>
      <Image alt="" width="100%" src={content.textafimagedados}></Image>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaTextFinal}>
            <h1 className={styles.titulo}>o que <br/> acReditamos</h1>
            <p>
            {content.hometextdescricao}
            </p>
          </section>
          <Image
            className={styles.imagem2}
            width="40%"
            alt=""
            src="/svg/ImagemFormatada2.webp"
          ></Image>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const client = Prismic.client("https://textaf.cdn.prismic.io/api/v2");
  const response = await client.getByUID("textaf", "pagina-principal");

  const { topimage, logoimage, discricao, hometextdescricao, textafimagedados, textaf } = response.data;
  //console.log(response.data)
  const content = {
    //header_logo: textaf_logo.url,
    bannerImage: topimage.url,
    imagemCentro: logoimage.url,
    discricao: RichText.asText(discricao),
    hometextdescricao: RichText.asText(hometextdescricao),
    textaf: textaf.url,
    textafimagedados: textafimagedados.url
  };
  return {
    props: {
      content,
    },
    revalidate: 60 * 2, // A pagina será regerada a cada 2 minutos
  };
};
