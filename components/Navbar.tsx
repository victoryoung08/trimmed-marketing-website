import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton/CTAButton";

export default function Navbar() {
  const links = [
    {
      text: "Home",
      href: "/",
      colSpan: "",
      style: "secondary",
      scroll: true,
    },
    {
      text: "Our Work",
      href: "/our-work",
      colSpan: "",
      style: "secondary",
      scroll: true,
    },
    {
      text: "Get Started",
      href: "#packages",
      colSpan: "col-span-2",
      style: "primary",
      scroll: false,
    },
  ];

  const linkBlock = links.map((link) => (
    <Link
      className={`nav-btn ${link.style} ${link.colSpan}`}
      href={link.href}
      key={link.text}
      scroll={link.scroll}
    >
      {link.text}
    </Link>
  ));
  return (
    <nav className="bg-[hsl(180,5%,8%)] p-2 rounded-xl fixed bottom-[60px] right-[50%] translate-x-[50%] w-[80%] z-50">
      <div className="mx-auto grid grid-cols-4 justify-center gap-2 w-full">
        {linkBlock}
      </div>
    </nav>
  );
}
