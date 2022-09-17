import { Link } from "react-scroll";

export default function ContactButton({ onClick }: { onClick?: () => any }) {
  return (
    <Link smooth to="contact" onClick={onClick}>
      <button className="primary whitespace-nowrap">Contact Me</button>
    </Link>
  );
}
