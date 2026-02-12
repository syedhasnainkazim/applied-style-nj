import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className="min-h-screen bg-dark text-white pt-32 pb-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg">
            Reach out directly — we’ll get back to you quickly.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

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
              title: "Instagram",
              value: "@appliedstylenj",
              link: "https://instagram.com/appliedstyle.nj",
            },
            {
              icon: Facebook,
              title: "Facebook",
              value: "Applied Style NJ",
              link: "#",
            },
          ].map(({ icon: Icon, title, value, link }, index) => (
            <motion.a
              key={title}
              href={link}
              target={link.includes("http") ? "_blank" : ""}
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 
                         hover:border-primary/50 hover:bg-white/10 
                         transition-all overflow-hidden"
            >
              {/* GRADIENT GLOW */}
              <div className="absolute -top-10 -left-10 w-40 h-40 
                              bg-primary/20 blur-3xl 
                              opacity-0 group-hover:opacity-100 
                              transition-all duration-500" />

              <div className="relative flex items-center gap-6">
                <Icon className="w-12 h-12 text-primary 
                                 group-hover:scale-110 transition" />
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-400">{value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        
        <a
          href="tel:7324050989"
          className="w-14 h-14 flex items-center justify-center 
                     rounded-full bg-primary text-black shadow-lg
                     hover:scale-110 transition-all"
        >
          <Phone />
        </a>

        <a
          href="mailto:appliedstylenj@gmail.com"
          className="w-14 h-14 flex items-center justify-center 
                     rounded-full bg-white text-black shadow-lg
                     hover:scale-110 transition-all"
        >
          <Mail />
        </a>

      </div>
    </section>
  );
}