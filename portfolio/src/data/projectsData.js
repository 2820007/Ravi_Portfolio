export const projectsData = [
  {
    id: 1,
    title: "Job Portal (MERN)",
    category: "Full Stack",
    image: "/job_portal.png",
    description:
      "A full-featured job portal connecting recruiters and job seekers with role-based dashboards, application tracking, and resume uploads.",
    features: [
      "Role-based auth (Recruiter/Candidate)",
      "Advanced job search & filters",
      "Application tracking system",
      "Resume upload via Cloudinary",
      "Admin analytics dashboard",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/2820007/jobportal",
    demo: "https://jobportal-kappa-beige.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Momo_House ",
    category: "Frontend",
    image: "/food.png",
    description:
      "This real time food delivery app  built with React, Tailwind, and Framer Motion.",
    features: [
      "Glassmorphism design system",
      "Dark/Light theme toggle",
      "Scroll-based animations",
      "Fully accessible & SEO-optimized",
      "EmailJS contact integration",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/2820007/MomoHouse",
    demo: "https://momo-house-eight.vercel.app/",
    featured: false,
  },
  
  {
    id: 3,
    title: "QuickDine",
    category: "E-commerce",
    image: "/quickdine.png",
    description:
      "A real-time table reserved platform with , restaurant dashboards.",
    features: [
      "Real-time table reserver",
      "Restaurant admin panel",
      "Cart & secure checkout",
      "Ratings & reviews",
      "Responsive mobile-first UI",
    ],
    techStack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/2820007/QuickDine",
    demo: "https://quick-dine-six-phi.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Grocery App",
    category: "E-commerce",
    image: "/freshmart.png",
    description:
      "A grocery e-commerce store with inventory management, cart persistence, coupon codes, and order history.",
    features: [
      "Product catalog & categories",
      "Cart persistence with Redux",
      "Coupon & discount system",
      "Order history & tracking",
      "Admin inventory management",
    ],
    techStack: ["Nodejs","React", "Redux Toolkit", "Express", "MongoDB"],
    github: "https://github.com/2820007/Grocery-app",
    demo: "https://grocery-ecommerce-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Airbnb Clone",
    category: "Full Stack",
    image: "airbnb",
    description:
      "A pixel-perfect Airbnb clone featuring property listings, map-based search, booking calendar, and host dashboards.",
    features: [
      "Map-based property search",
      "Booking calendar & availability",
      "Host/guest dual dashboards",
      "Image gallery with Cloudinary",
      "Stripe-ready payment structure",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ravikumar-dev/airbnb-clone",
    demo: "https://airbnb-clone-demo.vercel.app",
    featured: false,
  },
  
  {
    id: 6,
    title: "Learning Management System",
    category: "Full Stack",
    image: "lms",
    description:
      "A scalable LMS platform for course creation, video lessons, quizzes, and student progress tracking.",
    features: [
      "Course creation & video lessons",
      "Quiz & assessment engine",
      "Student progress tracking",
      "Instructor analytics",
      "Certificate generation",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Prisma", "JWT"],
    github: "https://github.com/ravikumar-dev/lms-platform",
    demo: "https://lms-platform-demo.vercel.app",
    featured: false,
  },
  {
    id: 7,
    title: "Hospital Management System",
    category: "Full Stack",
    image: "/hospital.png",
    description:
      "End-to-end hospital management platform for patient records, appointment scheduling, doctor availability, and billing.",
    features: [
      "Appointment booking & scheduling",
      "Patient medical history records",
      "Doctor availability calendar",
      "Billing & invoice generation",
      "Role-based access control",
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/ravikumar-dev/hospital-management",
    demo: "https://hospital-mgmt-demo.vercel.app",
    featured: true,
  },
  
];

export const projectCategories = ["All", "Full Stack", "E-commerce", "Frontend"];
