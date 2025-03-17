import { Pricing } from "@/components/ui/pricing";
import WavePattern from "@/components/ui/patterns/WavePattern";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

const plans = [
  {
    name: "FREE PLAN",
    price: "Free",
    period: "lifetime",
    features: [
      "1 Workspace: company/division/group",
      "250 Users",
      "Tour & Travel Management",
      "Powerful CRM",
      "Centralized Communication: Messager",
      "Custom Branding",
      "Accounting",
      "CRM/SMM Analytics",
      "Form Builder",
      "Project Management",
      "Contract & Documents",
      "Social Media Management (Facebook only)",
      "50k Social Media AI credits",
      "Side Menu Builder",
      "10GB of Storage",
      "Standard Support"
    ],
    description: "Exclusive for Starters",
    buttonText: "Start Your Journey",
    href: "/sign-up",
    isPopular: false
  },
  {
    name: "CAPTIVATE PLAN",
    price: "200",
    yearlyPrice: "160",
    period: "mo",
    features: [
      "Includes everything in the Free Plan",
      "1 Workspace: company/division/group",
      "10,000 Users",
      "Custom Branding & Custom Domain",
      "Social Media Management (add 1 account on Facebook, Instagram, Twitter (X), and TikTok)",
      "3 Million Social Media AI credits/mo",
      "Sales Agent Dashboard",
      "Budget Planner",
      "Set and track financial and business goals",
      "Centralized Communications: CallHub and Messager",
      "Customizable Contracts and Documents",
      "Recurring invoices/bills",
      "Custom Field Creator",
      "To-Do Task Management",
      "Built-in Calendar",
      "Zoom Meeting and Google Meet Intergration",
      "Digital Business Cards (vCards)",
      "Support Ticket Managment",
      "1TB of Storage",
      "Priority Support"
    ],
    description: "Optimized for Individuals and Growing Teams",
    buttonText: "Start Your Free Trial",
    href: "/sign-up",
    isPopular: false
  },
  {
    name: "ENGAGE PLAN",
    price: "300",
    yearlyPrice: "240",
    period: "mo",
    features: [
      "Includes everything in the Captivate Plan",
      "2 Workspaces: company/division/group",
      "25,000 Users",
      "Social Media Management (add 2 accounts on Facebook, Instagram, Twitter (X), and TikTok)",
      "10 Million Social Media AI credits/mo",
      "Advanced Analytics CRM and SMM",
      "Accounting Double Entry",
      "Commission Management",
      "Hotel & Room Management",
      "Centralized Communications: CallHub, EmailBox, and Messager",
      "Events Management",
      "Retainer Invoices (Deposits or Prepayments)",
      "5TB of Storage",
      "Priority Support"
    ],
    description: "Tailored for Teams on the Rise",
    buttonText: "Start Your Free Trial",
    href: "/sign-up",
    isPopular: true
  },
  {
    name: "THRIVE PLAN",
    price: "Contact Us",
    yearlyPrice: "Contact Us",
    period: "",
    features: [
      "Includes Everything in Engage Plan",
      "100+ Workspaces: company/division/group",
      "Unlimited Users",
      "Unlimted Clients",
      "Advanced HRM Dashboard",
      "Social Media Management (add 100 accounts on Facebook, Instagram, Twitter (X), and TikTok)",
      "1 Billion Social Media AI Credits/mo",
      "Enterprise Endpoint Management API",
      "POS System",
      "Accounting Double Entry",
      "Customized Modules",
      "Advanced security, management, and compliance controls, including Vault, DLP, and data regions",
      "Timesheet recording",
      "Advanced Training Library",
      "Unlimited Storage",
      "Dedicated Server",
      "Dedicated Account Manager",
      "And much more!"
    ],
    description: "High-Impact Solutions for Sustained Leadership",
    buttonText: "Let's Talk",
    href: "/contact",
    isPopular: false
  }
];

const testimonials = [
  {
    author: {
      name: "Mary L.",
      handle: "Luxury Travel Consultant",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d674c79?w=150&h=150&fit=crop&crop=face"
    },
    text: "Attention Keeper has truly changed the way I work here in Canada. It’s saving me around 15 hours a week — an absolute game-changer. In just a few months, I’ve seen my repeat clients double, which is amazing. Everything’s so streamlined now: my clients are happier, and I can focus more on delivering personalized luxury experiences. Honestly, I’m not sure how I managed without it!"
  },
  {
    author: {
      name: "Jessica T.",
      handle: "Group Travel Coordinator",
      avatar: "https://images.unsplash.com/photo-1599507348371-72c463926a72?w=150&h=150&fit=crop&crop=face"
    },
    text: "The communications feature in Attention Keeper is seriously awesome. It keeps my team and clients totally organized and on the same page. We’re running so much smoother now—I actually feel less stressed at work. For real, it’s a huge time-saver! I can’t imagine coordinating all our group trips without it."
  },
  {
    author: {
      name: "James B.",
      handle: "Adventure Travel Expert",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf02864ca?w=150&h=150&fit=crop&crop=face"
    },
    text: "I’ve been in the travel game for decades, and I’m beyond impressed with Attention Keeper. It lets me easily track each client’s adventure preferences—whether they love mountain trekking or scuba diving—and send them tailored recommendations that blow them away. My repeat bookings are through the roof now. Best of all, my clients feel like they’re getting VIP treatment on every trip!"
  },
  {
    author: {
      name: "Emily G.",
      handle: "Travel Specialist",
      avatar: "https://images.unsplash.com/photo-1573496800636-fa583ef9ae1c?w=150&h=150&fit=crop&crop=face"
    },
    text: "Attention Keeper has made organising trip itineraries and managing leads so much easier for me. I’ve seen roughly a 35% boost in bookings since I started using it, which is just brilliant. It also saves me heaps of time—so much of the process runs automatically now. The best part is I have more time to focus on creating amazing travel experiences for my clients."
  },
  {
    author: {
      name: "Sophie D.",
      handle: "Destination Wedding Planner",
      avatar: "https://images.unsplash.com/photo-1573496800636-fa583ef9ae1c?w=150&h=150&fit=crop&crop=face"
    },
    text: "¡Wow, en serio, qué maravilla! Attention Keeper ha revolucionado por completo mi negocio. The seamless booking system and personalized client management have literalmente reducido mi carga de trabajo a la mitad. Ahora tengo más tiempo para dedicarme a crear bodas de ensueño (dream weddings), y mis clientes están encantados con la experiencia."
  },
  {
    author: {
      name: "Anthony K.",
      handle: "Independent Agent",
      avatar: "https://images.unsplash.com/photo-1573496800636-fa583ef9ae1c?w=150&h=150&fit=crop&crop=face"
    },
    text: "Social media marketing used to be a major headache for me, but Attention Keeper has made it effortless. Now my social media game is consistently on point, and I’m attracting more leads without breaking a sweat. It honestly feels like I have a marketing assistant handling everything while I focus on my clients’ needs."
  }
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <WavePattern />
      <div className="relative z-10">
        <Pricing 
          plans={plans}
          title="Simple, Transparent Pricing"
          description="Choose the plan that works for you. All plans include access to our platform, lead generation tools, and dedicated support."
        />
        <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        />
      </div>
    </div>
  );
}
