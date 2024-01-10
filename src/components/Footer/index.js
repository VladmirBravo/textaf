import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import BotaoWhatsApp from "../Whatsaap/page";

export function Footer() {
  return (
    <>
      <Image
        //Barra Dourada Abaixo do MENU
        alt=""
        src={"/svg/linhadourada.svg"}
        width="100%"
        className={styles.barra}
      />
      <footer className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footercont}>
            <Image className={styles.footerImg} alt="" src="images/TextafLogo.jpg" width='50%'/>
            <h5>
              MORADA BENGUELA: Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </h5>
            <br />
            <h5>
              MORADA DONDO: Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </h5>
            <BotaoWhatsApp />
          </div>
        </div>
      </footer>
    </>
  );
}
