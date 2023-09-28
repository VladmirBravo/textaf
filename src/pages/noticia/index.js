import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function Noticia({ posts: PostBlog }) {
  const [posts, setPosts] = useState(PostBlog || []);
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descri, setDescri] = useState("");
  const [imagem, setImagem] = useState("");

  //Alimentar o Conteudo do Modal
  const handleClick = (tit, desc, imag) => {
    setTitulo(tit);
    setDescri(desc);
    setImagem(imag);
    setShow(true);
  };

  const limparDados = () => {
    setShow(false);
    setTitulo('');
    setDescri('');
    setImagem('');
  };

  return (
    <>
      <Head>
        <title>TEXTAF | Noticias</title>
      </Head>

      <Container className={styles.container}>
        <h1>Notícias</h1>
        <Row lg={4}>
          {posts.map((post) => (
            <>
              <Col className={styles.posts}>
                <Image
                  width={300}
                  height={300}
                  src={post.cover}
                  alt={post.title}
                />
                <a
                  onClick={() =>
                    handleClick(post.title, post.description, post.cover)
                  }
                  key={post.slug}
                >
                  <h1 key={post.slug}>{post.title}</h1>
                  <div dangerouslySetInnerHTML={{__html: post.description}}></div>
                </a>
                <div></div>
              </Col>
            </>
          ))}
        </Row>
      </Container>

      <Modal
        className={styles.modalContainer}
        size="xl"
        show={show}
        onHide={() => limparDados()}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <Container>
            <Row>
              <Col>
                <Image width={500} height={500} src={imagem} alt="" />
              </Col>
              <Col>
                <h1>{titulo}</h1>
                <div dangerouslySetInnerHTML={{ __html: descri }}></div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export const getStaticProps = async () => {
  const client = prismic.createClient("https://textaf.cdn.prismic.io/api/v2");
  const response = await client.getAllByType("post", {
    orderings: {
      field: "document.first_publication_date",
      filters: [prismic.filter.fulltext('post', 'description')],
    },
  });

  


  const posts = response.map((document) => {
    console.log(prismic.asHTML(document.data.description))
    return {
      slug: document.uid,
      title: RichText.asText(document.data.title),
      description: prismic.asHTML(document.data.description),
      cover: document.data.cover.url,
    };
  });

  return {
    props: {
      posts,
    },
    revalidate: 60 * 2, // A pagina será regerada a cada 2 minutos
  };
};
