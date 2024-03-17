// components/Option.js
import styles from './Option.module.css'; // You will create this CSS module

export default function Option({ title }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {/* Add more content or interactivity as needed */}
    </div>
  );
}

