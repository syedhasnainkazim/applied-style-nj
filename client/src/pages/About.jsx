import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="bg-dark text-white overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-12 pb-28 md:pb-32 space-y-24 md:space-y-28">

          {/* HEADER */}
          <div className="max-w-3xl space-y-8 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">
              About Applied Style NJ
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Applied Style NJ is a premium automotive styling company based in
              New Jersey, specializing in vinyl wraps, paint protection, and
              detail-focused customization.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Our mission is simple — combine top-tier materials with precision
              craftsmanship to deliver vehicles that look better than factory
              and stand the test of time.
            </p>
          </div>

          {/* VALUE CARDS */}
          <div className="grid gap-10 md:gap-8 md:grid-cols-3">
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
              <div key={item.title} className="card card-hover p-8 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-3">
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