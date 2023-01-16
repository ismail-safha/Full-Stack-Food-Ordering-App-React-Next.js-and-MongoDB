// ========= single product ============
import styles from "../../styles/product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
// use despatch
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  /// filter by size
  const [size, setSize] = useState(0);
  /// filter by price
  const [price, setPrise] = useState(pizza.prices[0]);
  // change price
  const changePrice = (number) => {
    setPrise(price + number);
  };
  // options
  const [extras, setExtras] = useState([]);
  // quantity
  const [quantity, setQuantity] = useState(1);

  // handleSize
  const handleSize = (sizeIndex) => {
    // calculate difference
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    // change price
    changePrice(difference);
  };
  // ===> function handel
  const handleChange = (e, option) => {
    // checked box
    const checked = e.target.checked;
    // condition
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  // button add to cart
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <div className={styles.container}>
      {/* left */}
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain" alt="" />
        </div>
      </div>
      {/* right */}
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        {/* add price */}
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>${pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        {/*  choose order */}
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            // option from data
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                // logic change option handle text and price
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          {/* add to cart  */}
          <button className={styles.btn} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
