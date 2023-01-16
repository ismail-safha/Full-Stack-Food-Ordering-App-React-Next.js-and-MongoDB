import styles from "../styles/ProductsList.module.css";
import PizzaCard from "./PizzaCard";
const ProductsList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>This PIZZA in town</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ea?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ea?
        Lorem ipsum, dolor sit amet
      </p>
      <div className={styles.wrapper}>
        {/* product list */}
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
