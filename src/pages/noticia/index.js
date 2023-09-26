import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import { useState } from "react";

export default function Noticia({ posts: PostBlog }) {
  const [posts, setPosts] = useState(PostBlog || []);

  return (
    <>
      <Head>
        <title>TEXTAF | Noticias</title>
      </Head>

      <Container className={styles.container}>
        <h1>Notícias</h1>
        <Row xs={3} md={3} lg={3}>
          {posts.map((post) => (
            <>
              <Col className={styles.posts}>
                <Image
                  width={300}
                  height={300}
                  src={post.cover}
                  alt={post.title}
                />
                <Link key={post.slug} legacyBehavior href="">
                  <a key={post.slug}>
                    <br />
                    <strong>{post.title}</strong>
                    <p>{post.description}</p>
                  </a>
                </Link>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const client = prismic.createClient("https://textaf.cdn.prismic.io/api/v2");
  const response = await client.getAllByType("post", {
    orderings: {
      field: "document.first_publication_date",
    },
  });

  const posts = response.map((document) => {
    return {
      slug: document.uid,
      title: RichText.asText(document.data.title),
      description: RichText.asText(document.data.description),
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
