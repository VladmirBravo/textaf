import { Container, Image, NavDropdown, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
import { useRouter } from 'next/router';
export function Header() {
  const { pathname } = useRouter();
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>
              <Image
                href="/"
                alt=""
                src={"/svg/textafLogoText.svg"}
                width="150"
                height="150"
                className="d-inline-block align-top"
              />
            </a>
          </ActiveLink>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className={pathname === '/sobre' ? styles.active : ''}  href="/sobre">SOBRE</Nav.Link>
                  <Nav.Link>|</Nav.Link>
                  <NavDropdown title="NEGÓCIOS" id="basic-nav-dropdown">
                    <NavDropdown.Item className={pathname === '/servicos' ? styles.active : ''} href="/servicos">
                      SERVIÇOS
                    </NavDropdown.Item>
                    <NavDropdown.Item className={pathname === '/marcasPropias' ? styles.active : ''} href="/marcasPropias">
                      MARCAS PRÓPIAS
                    </NavDropdown.Item>
                    <NavDropdown.Item className={pathname === '/contratos' ? styles.active : ''} href="/contratos">
                      CONTRATOS
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>|</Nav.Link>
                  <NavDropdown title="MARCAS" id="basic-nav-dropdown">
                    <NavDropdown.Item className={pathname === '/textaf' ? styles.active : ''} href="/textaf">
                      TEXTAF
                    </NavDropdown.Item>
                    <NavDropdown.Item className={pathname === '/texfafHome' ? styles.active : ''} href="/texfafHome">
                      TEXTAF HOME
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link className={pathname === '/noticia' ? styles.active : ''}  href="/noticia">NOTÍCIAS</Nav.Link>
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link className={pathname === '/carreira' ? styles.active : ''}  href="#carreira">CARREIRAS</Nav.Link>
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link className={pathname === '/contacto' ? styles.active : ''}  href="#contacto">CONTACTOS</Nav.Link>
                  <Nav.Link>|</Nav.Link>            
                  <Nav.Link className={styles.linkContainer} href="#link"><span style={{ marginRight: '-70px' }}>AO:</span> <Image alt=""  src="/images/agola.svg"></Image></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
      <Image
        //Barra Dourada Abaixo do MENU
        alt=""
        src={"/svg/linhadourada.svg"}
        width="100%"
        className={styles.barra}
      />
    </>
  );
}
