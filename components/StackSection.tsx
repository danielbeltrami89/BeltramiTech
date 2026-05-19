const stack = [
  "Swift",
  "UIKit",
  "SwiftUI",
  "Kotlin",
  "Android",
  "Jetpack Compose",
  "Media3 / ExoPlayer",
  "Firebase",
  "AWS",
  "REST APIs",
  "GitHub",
  "Next.js",
];

export function StackSection() {
  return (
    <section id="stack" className="section-shell scroll-mt-24 py-20">
      <div className="mb-8">
        <p className="eyebrow">Technical Stack</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Stack
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {stack.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-medium text-slate-200 transition hover:border-sky-300/30 hover:bg-white/[0.07]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
