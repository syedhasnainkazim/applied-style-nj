import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section>
        <div className="max-w-7xl mx-auto px-6 py-28 space-y-28">

          {/* HEADER */}
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              About Applied Style NJ
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              Applied Style NJ is a premium automotive styling company based in
              New Jersey, specializing in vinyl wraps, paint protection, and
              detail-focused customization.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Our mission is simple — combine top-tier materials with precision
              craftsmanship to deliver vehicles that look better than factory
              and stand the test of time.
            </p>
          </div>

          {/* VALUE CARDS */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Experience",
                text:
                  "Years of hands-on experience working with luxury, performance, and enthusiast vehicles.",
              },
              {
                title: "Quality",
                text:
                  "We only use premium vinyls, films, and coatings from trusted industry brands.",
              },
              {
                title: "Precision",
                text:
                  "Every detail matters — clean edges, perfect alignment, and flawless finishes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-card border border-white/10
                           hover:border-primary/40 hover:-translate-y-1
                           transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}