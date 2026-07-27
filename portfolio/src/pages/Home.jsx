import { Suspense, lazy } from "react";
import SEO from "../components/SEO";
import ErrorBoundary from "../components/ErrorBoundary";
import { TextSkeleton } from "../components/Skeleton";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";

const Projects = lazy(() => import("../sections/Projects"));
const Experience = lazy(() => import("../sections/Experience"));
const Education = lazy(() => import("../sections/Education"));
const Certifications = lazy(() => import("../sections/Certifications"));
const Achievements = lazy(() => import("../sections/Achievements"));
const Services = lazy(() => import("../sections/Services"));
const TechStack = lazy(() => import("../sections/TechStack"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
const GithubStats = lazy(() => import("../sections/GithubStats"));
const Blog = lazy(() => import("../sections/Blog"));
const Contact = lazy(() => import("../sections/Contact"));

function SectionFallback() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <TextSkeleton lines={4} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEO />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
   
        <About />
     
      <ErrorBoundary>
        <Skills />
      </ErrorBoundary>
      <Suspense fallback={<SectionFallback />}>
        <ErrorBoundary><Projects /></ErrorBoundary>
        <ErrorBoundary><Experience /></ErrorBoundary>
        <ErrorBoundary><Education /></ErrorBoundary>
        <ErrorBoundary><Achievements /></ErrorBoundary>
        <ErrorBoundary><Certifications /></ErrorBoundary>
        <ErrorBoundary><Services /></ErrorBoundary>
        <ErrorBoundary><Testimonials /></ErrorBoundary>
        <ErrorBoundary><TechStack /></ErrorBoundary>
        <ErrorBoundary><GithubStats /></ErrorBoundary>
        <ErrorBoundary><Blog /></ErrorBoundary>
        <ErrorBoundary><Contact /></ErrorBoundary>
      </Suspense>
    </>
  );
}
