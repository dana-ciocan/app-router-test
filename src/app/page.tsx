import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is the home page</h1>
      <p>
        There isn&apos;t much here as it&apos;s just used to demo how routing
        works in the Next.js app router
      </p>
      <Link href="/product/test-product">Go to a product page</Link>
    </main>
  );
}
