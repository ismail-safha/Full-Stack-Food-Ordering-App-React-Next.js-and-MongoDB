import styles from "../styles/Navbar.module.css";
// import image from next
import Image from "next/image";
// use redux as useSelector
// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  // redux
  const quantity = useSelector((state) => state.cart.quantity);

  // const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      {/*  1 */}
      <div className={styles.callButton}>
        <div className={styles.image}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.info}>
          <div>Order Now</div>
          <div>06********52</div>
        </div>
      </div>
      {/* 2 */}
      <div className={styles.items}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home page</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/Logo.png" alt="logo" width="100" height="100" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      {/* 3 */}
      <Link href="/cart" passHref>
        <div className={styles.cartImag}>
          <Image src="/img/cart.png" alt="" width="32" height="32" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
