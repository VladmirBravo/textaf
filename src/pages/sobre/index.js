import Head from "next/head";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>TEXTAF | Sobre</title>
      </Head>
      <Image width="100%" alt="" src="/svg/maquina2.svg"></Image>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1 className={styles.titulo}>Historial</h1>
            <p>
              África Têxtil é a primeira fábrica no sector em Angola, inaugurada
              em 1970 pelo primeiro Presidente de Angola Dr António Agostinho
              Neto. Em 2020 após a realização de um concurso público
              internacional a África Têxtil passou a ter a gestão do grupo
              zimbabuano com reputação continental, denominado BOABAB COUTON.
            </p>
            <br />
            <p>
              Em 2021, com a nova gestão, as unidades fabris anteriormente
              pertencentes ao Governo, foram reinauguradas pelo Presidente João
              Manuel Gonçalves Lourenço, situadas nas províncias do Cuanza Norte
              e Benguela, ambas ganharam uma nova imagem e passaram a ser
              designadas Textaf.
            </p>
            <br />
            <p>
              Em termos de qualidade estrutura e maquinarias, as fabricas de
              Benguela e do Cuanza Norte, são as únicas em África.
            </p>
            <br />
            <p>
              Para a reabertura e reestruturação da Textaf a BOABAB investiu
              cerca de 1 bilhão de dólares, para a produção com grande qualidade
              de roupas, toalhas de banho e de mesa, lenções e tem também a
              capacidade de produzir uniformes e fardas corporativas para o
              Ministério do Interior do país.
            </p>
          </section>
          <Image
            className={styles.imagem}
            width="50%"
            alt=""
            src="/svg/ImagemFormatada.svg"
          ></Image>
        </div>
        <Image
          className={styles.imagem1}
          width="100%"
          alt=""
          src="/svg/maquina1.svg"
        ></Image>
      </main>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaTextFinal}>
            <h1 className={styles.titulo}>Visão</h1>
            <p>
              Para a reabertura e reestruturação da Textaf a BOABAB investiu
              cerca de 1 bilhão de dólares, para a produção com grande qualidade
              de roupas, toalhas de banho e de mesa, lenções e tem também a
              capacidade de produzir uniformes e fardas corporativas para o
              Ministério do Interior do país.
            </p>
            <h1 className={styles.titulo}>Missão</h1>
            <p>
              Para a reabertura e reestruturação da Textaf a BOABAB investiu
              cerca de 1 bilhão de dólares, para a produção com grande qualidade
              de roupas, toalhas de banho e de mesa, lenções e tem também a
              capacidade de produzir uniformes e fardas corporativas para o
              Ministério do Interior do país.
            </p>
          </section>
          <Image
          className={styles.imagem2}
          width="70%"
          alt=""
          src="/svg/retangulo.svg"
        ></Image>
        </div>
      </main>
    </>
  );
}
