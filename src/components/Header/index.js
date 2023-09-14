import { Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";

export function Header(){
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
        <Image
                alt=""
                src={'/svg/textafLogoText.svg'}
                width="150"
                height="150"
                className="d-inline-block align-top"
              />
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>
             
            </a>
          </ActiveLink>
          <nav>
            <ActiveLink href="/" activeClassName={styles.active}>
              <a>HOME</a>
            </ActiveLink>
            <Nav.Link>|</Nav.Link>
            <ActiveLink href="/negocio" activeClassName={styles.active}>
              <a>NÉGOCIO</a>
            </ActiveLink>
            <Nav.Link>|</Nav.Link>
            <ActiveLink href="/marcas" activeClassName={styles.active}>
              <a>MARCAS</a>
            </ActiveLink>
            <Nav.Link>|</Nav.Link>
            <ActiveLink href="/noticia" activeClassName={styles.active}>
              <a>NOTICIAS</a>
            </ActiveLink>
            <Nav.Link>|</Nav.Link>
            <ActiveLink href="/carreira" activeClassName={styles.active}>
              <a>CARREIRAS</a>
            </ActiveLink>
            <Nav.Link>|</Nav.Link>
            <ActiveLink href="/contacto" activeClassName={styles.active}>
              <a>CONTACTOS</a>
            </ActiveLink>
            <Nav.Link href="#link">AO</Nav.Link>
          </nav>
        </div>
      </header>
    </>
  );
}


//git commit -m "Adicição das de outras paginas e da alimentação dinamica"
