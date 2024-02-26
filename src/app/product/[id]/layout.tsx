import Link from "next/link";
import "./product-global.css";

export default function ProductLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <Link href="/">Home</Link> Product nav menu - shared between all pages
        in `/product`
      </nav>
      {children}
    </section>
  );
}
