import styles from "./Categories.module.css";

const Categories = (props) => {
  const { filterItem, categories } = props;
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          {categories.map((name) => {
            return <li key={name} onClick={() => filterItem(name)}>{name}</li>;
          })}
        </ul>
      </nav>
    </>
  );
};

export default Categories;
