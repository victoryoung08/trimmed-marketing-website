import Image from "next/image";

export default function page() {
  return (
    <main>
      <section className="h-[70vh]">
        <h1>
          We work with businesses to connect with customers they love working
          with
        </h1>
      </section>
      <section>
        <div className="flex gap-2">
          <span>Content</span>
          <span>Paid Ads</span>
          <span>Create & Convert</span>
        </div>
        <h2>Mancave Barbershop Australia</h2>
        <div>
          <img src="" alt="" className="bg-white w-full h-[400px]" />
        </div>
      </section>
    </main>
  );
}
