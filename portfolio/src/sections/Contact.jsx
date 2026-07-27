import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiMapPin, FiPhone } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import { personalData } from "../data/personalData";
import { slideInLeft, slideInRight } from "../animations/variants";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    try {
      if (EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID") {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: values.name,
            from_email: values.email,
            subject: values.subject,
            message: values.message,
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <RevealOnScroll variants={slideInLeft} className="lg:col-span-2 space-y-6">
            <GlassCard>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                  <p className="font-medium text-slate-900 dark:text-white">{personalData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="font-medium text-slate-900 dark:text-white">{personalData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                  <p className="font-medium text-slate-900 dark:text-white">{personalData.location}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-0 overflow-hidden">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps?q=Bengaluru,India&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.3] contrast-125"
              />
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll variants={slideInRight} className="lg:col-span-3">
            <GlassCard>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    icon={FiUser}
                    label="Your Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="John Doe"
                  />
                  <Field
                    icon={FiMail}
                    label="Your Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="john@example.com"
                  />
                </div>

                <Field
                  icon={FiMessageSquare}
                  label="Subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  placeholder="Project inquiry"
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl glass text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-primary resize-none ${
                      errors.message ? "ring-2 ring-error" : ""
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-error">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  icon={FiSend}
                  className="w-full sm:w-auto"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      role="status"
                      className="flex items-center gap-2 text-success font-medium"
                    >
                      <FiCheckCircle /> Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      role="alert"
                      className="text-error font-medium"
                    >
                      Something went wrong. Please try emailing me directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, name, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full pl-11 pr-4 py-3 rounded-xl glass text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-primary ${
            error ? "ring-2 ring-error" : ""
          }`}
        />
      </div>
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}
