import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="bg-dark text-white">
      <div className="max-w-3xl mx-auto px-6 py-32 text-center space-y-12">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-extrabold"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-gray-400 text-lg"
        >
          Reach out directly — we’ll get back to you quickly.
        </motion.p>

        {/* CONTACT LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-6 text-lg"
        >

          {/* EMAIL */}
          <a
            href="mailto:appliedstylenj@gmail.com"
            className="flex items-center justify-center gap-4 text-primary hover:underline"
          >
            <MdEmail className="text-2xl" />
            appliedstylenj@gmail.com
          </a>

          {/* PHONE */}
          <a
            href="tel:15551234567"
            className="flex items-center justify-center gap-4 text-primary hover:underline"
          >
            <FaPhoneAlt className="text-xl" />
            (732)-405-0989
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/appliedstyle.nj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 text-primary hover:underline"
          >
            <FaInstagram className="text-2xl" />
            @appliedstylenj
          </a>

          {/* FACEBOOK */}
          <a
            href="https://facebook.com/appliedstylenj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 text-primary hover:underline"
          >
            <FaFacebookF className="text-2xl" />
            Applied Style NJ
          </a>

        </motion.div>
      </div>
    </section>
  );
}