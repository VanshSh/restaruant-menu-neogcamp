import styles from "./Button.module.css";

const Button = () => {
  return (
    <nav>
      <main className={styles.links}>
        <a
          className={styles.code}
          href="#"
        >
          GitHub Code
        </a>
        <a className={styles.portfolio} href="#">
          Portfolio
        </a>
      </main>
    </nav>
  );
};

export default Button;
