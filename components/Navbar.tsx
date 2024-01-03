import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton/CTAButton";

export default function Navbar() {
  const links = [
    {
      text: "Home",
      href: "/",
      colSpan: "",
      style: "secondary",
    },
    {
      text: "Our Work",
      href: "/our-work",
      colSpan: "",
      style: "secondary",
    },
    {
      text: "Get Started",
      href: "/get-started",
      colSpan: "col-span-2",
      style: "primary",
    },
  ];

  const linkBlock = links.map((link) => (
    <Link
      className={`nav-btn ${link.style} ${link.colSpan}`}
      href={link.href}
      key={link.text}
    >
      {link.text}
    </Link>
  ));
  return (
    <nav className="bg-[hsl(180,5%,8%)] p-2 rounded-xl fixed bottom-[60px] right-[50%] translate-x-[50%] ">
      <div className="mx-auto grid grid-cols-4 justify-center gap-2">
        {linkBlock}
      </div>
    </nav>
  );
}
