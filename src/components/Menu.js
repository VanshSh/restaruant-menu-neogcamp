import styles from "./Menu.module.css";

const Menu = (props) => {
 
  const items = props.items;

  return (
    <>
      {items.map((values) => {
        return (
          <>
            <section key={values.id} className={styles.menu}>
              <img src={values.img} alt={values.title} />
              <div className={styles.info}>
                <h3>{values.title}</h3>
                <h3>₹ {values.price}</h3>
              </div>
              <p>{values.desc}</p>
            </section>
          </>
        );
      })}
    </>
  );
};

export default Menu;
