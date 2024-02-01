import styles from "./page.module.css";
import Calendar from "@/components/Calendar/Calendar";
import BulletPoint from "@/components/BulletPoint/BulletPoint";

export default function page() {
  const list = [
    {
      content: "Provide a recommended overview for your marketing strategy",
    },
    {
      content: "Show you what it's like working with us",
    },
    {
      content:
        "Answer any questions about marketing, branding and social media",
    },
  ];

  return (
    <section className="max-h-screen">
      <div>
        <h1>Let&apos;s work together</h1>
        <p>
          Book in a call to understand how we can help and plug seamlessly into
          your business
        </p>
        <p className="font-semibold">In this call</p>
        {list.map((l) => (
          <BulletPoint key={l.content}>{l.content}</BulletPoint>
        ))}
      </div>
      <Calendar />
    </section>
  );
}
