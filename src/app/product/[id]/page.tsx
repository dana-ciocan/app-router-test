import styles from "./product.module.css";

export default function Product({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      This is the product page for ID: {params.id}
    </main>
  );
}
