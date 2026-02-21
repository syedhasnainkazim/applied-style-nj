import { Mail, Phone, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-dark text-white relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-12 pb-28 md:pb-32 space-y-24 md:space-y-28">

        {/* HEADER */}
        <div className="max-w-3xl space-y-8 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">
            Contact Us
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Reach out directly — we’ll get back to you quickly.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {[
            {
              icon: Mail,
              title: "Email",
              value: "appliedstylenj@gmail.com",
              link: "mailto:appliedstylenj@gmail.com",
            },
            {
              icon: Phone,
              title: "Phone",
              value: "(732) 405-0989",
              link: "tel:7324050989",
            },
            {
              icon: Instagram,
              title: "@appliedstylenj",
              value: "Instagram",
              link: "https://instagram.com/appliedstyle.nj",
            },
            {
              icon: Facebook,
              title: "Facebook",
              value: "Applied Style NJ",
              link: "#",
            },
          ].map(({ icon: Icon, title, value, link }) => (
            <a
              key={title}
              href={link}
              target={link.includes("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card card-hover p-8 md:p-6 cursor-pointer flex items-center gap-6 md:gap-5"
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}