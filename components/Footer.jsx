import Image from "next/image";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          layout="fill"
          objectFit="cover"
          // height="40"
          // width="40"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            aulad ayad hay inbiat.
            <br /> morroco
            <br /> 065235****
          </p>
          <p className={styles.text}>
            aulad ayad hay inbiat.
            <br /> morroco
            <br /> 065235****
          </p>
          <p className={styles.text}>
            aulad ayad hay inbiat.
            <br /> morroco
            <br /> 065235****
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            aulad ayad hay inbiat.
            <br /> morroco
            <br /> 065235****
          </p>
          <p className={styles.text}>
            aulad ayad hay inbiat.
            <br /> morroco
            <br /> 065235****
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
