import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import ImagemFormatada2 from ".././../../public/svg/ImagemFormatada2.webp";

export default function Noticia() {
  return (
    <>
      <Head>
        <title>TEXTAF | Noticias</title>
      </Head>
      <main className={styles.container}>
        <h1>Notícias</h1>
        <div className={styles.posts}>
          <Image
            width={300}
            height={300}
            src={ImagemFormatada2}
            alt="Post  Titulo 1"
          />
          <Link legacyBehavior href="">
            <a>
              <br />
              {/* Limite maximo de 17 Caracteres */}
              <strong>Título Notícia</strong>
              <p>Ver Mais...</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
