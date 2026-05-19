import { ABOUT_TEXT } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:items-start">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            About
          </h2>
        </div>
        <p className="max-w-3xl text-lg leading-9 text-slate-300">
          {ABOUT_TEXT}
        </p>
      </div>
    </section>
  );
}
