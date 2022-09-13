import Link from "next/link";

export default function ContactButton() {
  return (
    <Link href="mailto:ryanjbyrne3@gmail.com">
      <button className="primary">Contact Me</button>
    </Link>
  );
}
