import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import SEO from "../components/SEO";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Ravi Kumar" path="/404" />
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-mesh">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl md:text-9xl font-extrabold font-poppins text-gradient mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl text-slate-300 mb-8 max-w-md"
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Link to="/">
            <Button variant="primary" icon={FaHome}>
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
