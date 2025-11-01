import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Lets start building this website!</h1>
      </main>
    </div>
  );
}
