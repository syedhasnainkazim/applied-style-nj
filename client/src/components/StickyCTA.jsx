import { Link } from "react-router-dom";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur border-t border-white/10 py-4 px-6 flex justify-center items-center z-50">
      <div className="flex gap-6 items-center">
        <p className="text-gray-300 text-sm hidden md:block">
          Ready to upgrade your vehicle?
        </p>

        <Link
          to="/get-quote"
          className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:scale-105 transition"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}