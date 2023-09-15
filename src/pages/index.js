import { Image } from "react-bootstrap";
import styles from "../styles/home.module.scss";
import Head from "next/head";
import UncontrolledExample from "@/components/Carousel";

import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function Home({ content }) {
  // const [document] = usePrismicDocumentByUID('textaf','pagina-principal')
  //console.log(document.data.discricao)
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Image
          width="100%"
          alt=""
          src={content.bannerImage}
          className={styles.bannerImage}
        ></Image>
      </div>
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
        <div width="100%" height={600}>
          <UncontrolledExample />
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

  const { topimage, logoimage, discricao } = response.data;
  console.log(response.data)
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
