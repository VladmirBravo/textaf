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
      <Image alt="" className={styles.imageDados} width="100%" src={content.textafimagedados}></Image>
      <div className={styles.iconesDados}>
         <Image alt="" width="30%" src='\svg\tons.webp'></Image>
         <Image alt="" width="30%" src='\svg\trabalha.webp'></Image>
         <Image alt="" width="30%" src='\svg\tons.webp'></Image>
      </div>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaTextFinal}>
            <h1 className={styles.titulo}>
              o que <br /> acReditamos
            </h1>
            <p>{content.hometextdescricao}</p>
          </section>
          <Image
            className={styles.imagem2}
            width="40%"
            alt=""
            src={content.imagemfinal}
          ></Image>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const client = Prismic.client("https://textaf.cdn.prismic.io/api/v2");
  const response = await client.getByUID("home", "pagina-home");

  const {
    discricao,
    hometextdescricao,
    textafimagedados,
    textaf,
    imagemfinal,
  } = response.data;
  //console.log(response.data)
  const content = {
    //header_logo: textaf_logo.url,
    discricao: RichText.asText(discricao),
    hometextdescricao: RichText.asText(hometextdescricao),
    textaf: textaf.url,
    textafimagedados: textafimagedados.url,
    imagemfinal: imagemfinal.url,
  };
  return {
    props: {
      content,
    },
    revalidate: 60 * 2, // A pagina será regerada a cada 2 minutos
  };
};
