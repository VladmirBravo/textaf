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
        <Image alt="" width="20%" src="/svg/textaflogo.webp"></Image>
      </div>
      <section className={styles.ctaText}>
        <p>{content.discricao}</p>
      </section>
      <Image alt="" width="100%" src="/svg/SenhorCinza.webp"></Image>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaTextFinal}>
            <h1 className={styles.titulo}>O QUE ACREDITAMOS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi
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

  const { topimage, logoimage, discricao } = response.data;
  //console.log(response.data)
  const content = {
    //header_logo: textaf_logo.url,
    bannerImage: topimage.url,
    imagemCentro: logoimage.url,
    discricao: RichText.asText(discricao),
  };
  return {
    props: {
      content,
    },
    revalidate: 60 * 2, // A pagina será regerada a cada 2 minutos
  };
};
