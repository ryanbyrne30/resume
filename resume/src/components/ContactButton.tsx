import Link from "next/link";

export default function ContactButton() {
  return (
    <Link href="/#contact">
      <button className="primary">Contact Me</button>
    </Link>
  );
}
