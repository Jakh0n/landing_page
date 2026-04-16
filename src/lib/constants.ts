import type {
  NavLink,
  Course,
  Teacher,
  Testimonial,
  Feature,
  PricingPlan,
  Stat,
  FAQItem,
  ContactInfo,
} from "@/types";

export const SITE_NAME = "EduPrime Academy";
export const SITE_TAGLINE =
  "Empowering minds, transforming futures through world-class education.";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Courses", href: "#courses" },
  { label: "Teachers", href: "#teachers" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { value: 10000, suffix: "+", label: "Active Students" },
  { value: 200, suffix: "+", label: "Expert Courses" },
  { value: 50, suffix: "+", label: "Certified Teachers" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export const FEATURES: Feature[] = [
  {
    icon: "BookOpen",
    title: "Expert-Led Courses",
    description:
      "Learn from industry professionals with real-world experience and proven teaching methodologies.",
  },
  {
    icon: "Users",
    title: "Community Learning",
    description:
      "Join a vibrant community of learners. Collaborate, discuss, and grow together with peers worldwide.",
  },
  {
    icon: "Award",
    title: "Certified Programs",
    description:
      "Earn recognized certificates upon completion that boost your resume and career prospects.",
  },
  {
    icon: "Clock",
    title: "Flexible Schedule",
    description:
      "Study at your own pace with lifetime access. Learn anytime, anywhere on any device.",
  },
  {
    icon: "Target",
    title: "Project-Based Learning",
    description:
      "Apply your knowledge through hands-on projects and real-world case studies for deeper understanding.",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description:
      "Get help whenever you need it. Our support team and mentors are always ready to assist you.",
  },
];

export const COURSE_CATEGORIES = [
  "All",
  "Programming",
  "Design",
  "Marketing",
  "Language",
] as const;

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    category: "Programming",
    instructor: "Dr. Sarah Chen",
    rating: 4.9,
    students: 12450,
    price: 49.99,
    originalPrice: 199.99,
    thumbnail: "/images/course-web.jpg",
    duration: "42 hours",
    lessons: 380,
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Alex Rivera",
    rating: 4.8,
    students: 8320,
    price: 39.99,
    originalPrice: 149.99,
    thumbnail: "/images/course-design.jpg",
    duration: "28 hours",
    lessons: 210,
  },
  {
    id: "3",
    title: "Digital Marketing Strategy",
    category: "Marketing",
    instructor: "Emma Watson",
    rating: 4.7,
    students: 6780,
    price: 34.99,
    originalPrice: 129.99,
    thumbnail: "/images/course-marketing.jpg",
    duration: "24 hours",
    lessons: 185,
  },
  {
    id: "4",
    title: "Advanced Python & AI",
    category: "Programming",
    instructor: "Prof. James Liu",
    rating: 4.9,
    students: 15200,
    price: 59.99,
    originalPrice: 249.99,
    thumbnail: "/images/course-python.jpg",
    duration: "56 hours",
    lessons: 420,
  },
  {
    id: "5",
    title: "Business English Mastery",
    category: "Language",
    instructor: "Maria Garcia",
    rating: 4.6,
    students: 4560,
    price: 29.99,
    originalPrice: 99.99,
    thumbnail: "/images/course-english.jpg",
    duration: "20 hours",
    lessons: 150,
  },
  {
    id: "6",
    title: "Brand Identity & Logo Design",
    category: "Design",
    instructor: "Chris Anderson",
    rating: 4.8,
    students: 7890,
    price: 44.99,
    originalPrice: 179.99,
    thumbnail: "/images/course-brand.jpg",
    duration: "32 hours",
    lessons: 240,
  },
];

export const TEACHERS: Teacher[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    subject: "Web Development",
    bio: "Former Google engineer with 15 years of full-stack development experience. PhD in Computer Science from MIT.",
    rating: 4.9,
    students: 24500,
    avatar: "/images/teacher-1.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "2",
    name: "Alex Rivera",
    subject: "UI/UX Design",
    bio: "Award-winning designer who has worked with Apple, Spotify, and Airbnb. Passionate about creating beautiful user experiences.",
    rating: 4.8,
    students: 18200,
    avatar: "/images/teacher-2.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "3",
    name: "Prof. James Liu",
    subject: "AI & Machine Learning",
    bio: "AI researcher and professor with publications in top conferences. Built ML systems used by millions worldwide.",
    rating: 4.9,
    students: 31000,
    avatar: "/images/teacher-3.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "4",
    name: "Emma Watson",
    subject: "Digital Marketing",
    bio: "Marketing strategist who has helped over 200 businesses scale. Former CMO at a Fortune 500 company.",
    rating: 4.7,
    students: 15800,
    avatar: "/images/teacher-4.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "EduPrime Academy completely transformed my career. The web development bootcamp gave me the skills to land my dream job at a top tech company within 3 months.",
    rating: 5,
    name: "Michael Torres",
    role: "Software Engineer",
    course: "Web Development Bootcamp",
    avatar: "/images/student-1.jpg",
  },
  {
    id: "2",
    quote:
      "The quality of instruction is unmatched. The UI/UX course helped me transition from graphic design to product design, and I couldn't be happier with the outcome.",
    rating: 5,
    name: "Sophia Kim",
    role: "Product Designer",
    course: "UI/UX Design Masterclass",
    avatar: "/images/student-2.jpg",
  },
  {
    id: "3",
    quote:
      "I've tried many online platforms, but EduPrime stands out. The community, the mentorship, and the project-based approach make learning truly effective.",
    rating: 5,
    name: "David Okafor",
    role: "Data Scientist",
    course: "Advanced Python & AI",
    avatar: "/images/student-3.jpg",
  },
  {
    id: "4",
    quote:
      "The flexible schedule was a game-changer for me as a working parent. I completed the marketing course at my own pace and doubled my freelance income.",
    rating: 4,
    name: "Lisa Chen",
    role: "Marketing Consultant",
    course: "Digital Marketing Strategy",
    avatar: "/images/student-4.jpg",
  },
  {
    id: "5",
    quote:
      "From zero coding knowledge to building full-stack applications in 6 months. The structured curriculum and supportive instructors made all the difference.",
    rating: 5,
    name: "James Miller",
    role: "Full-Stack Developer",
    course: "Web Development Bootcamp",
    avatar: "/images/student-5.jpg",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    description: "Perfect for getting started with online learning",
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: [
      "Access to 50+ courses",
      "Basic certificates",
      "Community forum access",
      "Email support",
      "Mobile app access",
    ],
    highlighted: false,
    cta: "Start Basic",
  },
  {
    name: "Pro",
    description: "Most popular plan for serious learners",
    monthlyPrice: 49,
    yearlyPrice: 470,
    features: [
      "Access to all 200+ courses",
      "Premium certificates",
      "1-on-1 mentorship sessions",
      "Priority support",
      "Offline downloads",
      "Project reviews",
      "Career guidance",
    ],
    highlighted: true,
    cta: "Start Pro",
  },
  {
    name: "Enterprise",
    description: "For teams and organizations",
    monthlyPrice: 99,
    yearlyPrice: 950,
    features: [
      "Everything in Pro",
      "Custom learning paths",
      "Team analytics dashboard",
      "Dedicated account manager",
      "API access",
      "SSO integration",
      "Custom certificates",
      "Bulk licensing",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How do I get started with EduPrime Academy?",
    answer:
      "Getting started is easy! Simply create a free account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately after enrollment.",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer:
      "Yes! Our certificates are recognized by over 500 companies worldwide. We partner with industry leaders to ensure our curriculum meets real-world standards and employer expectations.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Absolutely! EduPrime Academy is fully responsive and we have dedicated iOS and Android apps. You can learn on any device, anytime, anywhere — even download lessons for offline viewing.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all courses. If you're not satisfied with your learning experience, simply request a refund within 30 days of purchase — no questions asked.",
  },
  {
    question: "Do you offer group or corporate plans?",
    answer:
      "Yes! Our Enterprise plan is designed for teams and organizations. We offer custom learning paths, team analytics, bulk licensing, and dedicated account managers. Contact our sales team for a custom quote.",
  },
  {
    question: "How often is course content updated?",
    answer:
      "Our instructors regularly update course content to reflect the latest industry trends and technologies. Major updates happen quarterly, and you get lifetime access to all updates at no additional cost.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 7-day free trial on all plans so you can explore the platform and sample courses before committing. No credit card required to start your trial.",
  },
  {
    question: "How does the mentorship program work?",
    answer:
      "Pro and Enterprise members get access to 1-on-1 mentorship sessions with industry experts. You can schedule sessions at your convenience, get project feedback, and receive personalized career guidance.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: "123 Education Street, San Francisco, CA 94105",
  phone: "+1 (555) 123-4567",
  email: "hello@eduprime.academy",
  hours: "Mon - Fri: 9:00 AM - 6:00 PM PST",
};

export const FOOTER_LINKS = {
  about: [
    { label: "Our Story", href: "#" },
    { label: "Team", href: "#teachers" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  courses: [
    { label: "Web Development", href: "#courses" },
    { label: "UI/UX Design", href: "#courses" },
    { label: "Marketing", href: "#courses" },
    { label: "Data Science", href: "#courses" },
  ],
  company: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
};
