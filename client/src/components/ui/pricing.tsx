"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { RainbowButton } from "./rainbow-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

const faqData = [
  {
    question: "Do I need technical skills to use Attention Keeper?",
    answer:
      "Not at all! Attention Keeper is built for travel professionals, not tech experts. The platform is intuitive and easy to navigate, so you can focus on your clients—not on figuring out complicated tools. Plus, we've got you covered with step-by-step tutorials, onboarding guides, and live support to make getting started stress-free. Even if technology isn't your strong suit, you'll feel like a pro in no time.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. We believe in earning your trust, not locking you into a contract. If you're in your free trial, there's no cost or commitment, and if you're on a paid plan, you can cancel anytime—it's that simple. Your subscription will stop at the end of your billing cycle, with no strings attached. We're confident you'll stay with Attention Keeper because it works, not because you have to.",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "Everything. During your free trial, you'll have full, unrestricted access to all of Attention Keeper's powerful features—client retention, tour and travel management, social media automation, financial tracking, and more. Explore the entire platform risk-free, no credit card required. We want you to experience how Attention Keeper can transform your agency, so you can decide if it's the right fit without any pressure.",
  },
  {
    question: "Is Attention Keeper suitable for solo travel agents or small agencies?",
    answer:
      "Absolutely! Whether you're a solo agent juggling everything yourself or a small agency looking to grow, Attention Keeper is designed to scale with your needs. You'll have all the tools to streamline your workload, impress your clients, and build a more professional operation—without the overwhelm. Start small, and as your agency grows, Attention Keeper grows with you.",
  },
  {
    question: "What happens after the free trial ends?",
    answer:
      "After your free trial, you can choose the plan that best fits your agency's needs, whether you're just starting out or ready to scale. We're confident you'll see the value in Attention Keeper during your trial, but if it's not the right fit, you can walk away—no charges, no hard feelings. If you decide to stay, you'll keep all your data and settings, so you can pick up right where you left off.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most users can get fully set up in less than an hour! Our onboarding process is simple, and we provide easy-to-follow instructions and tutorials to guide you every step of the way. From customizing your dashboard to automating workflows, you'll be up and running in no time—without the frustration of a complicated setup.",
  },
  {
    question: "Does Attention Keeper integrate with other tools I already use?",
    answer:
      "Yes! Attention Keeper integrates seamlessly with tools like Zoom, Google Meet, Stripe, PayPal, and more. This means you can keep using the platforms you trust while centralizing your workflows in one powerful system. And if there's a tool you'd like us to add, let us know—we're always expanding our integrations based on user feedback.",
  },
  {
    question: "Can I use Attention Keeper on my phone or tablet?",
    answer:
      "Definitely. Attention Keeper is fully responsive and works beautifully on any device, whether you're using a desktop, tablet, or smartphone. Manage your agency on the go, handle client requests from anywhere, and stay connected no matter where your business takes you.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, your data is our top priority. Attention Keeper uses industry-standard encryption, two-factor authentication (like Google Authentication), and CAPTCHA to keep your information safe. We've built the platform with security and reliability in mind, so you can focus on your business without worrying about data breaches or unauthorized access.",
  },
  {
    question: "What kind of support do I get as a customer?",
    answer:
      "You'll never feel stuck with Attention Keeper. We provide 24/7 email support, live chat during business hours, and an in-depth knowledge base packed with tutorials, guides, and answers to common questions. Our goal is to ensure you have the help you need, exactly when you need it.",
  },
  {
    question: "Does the platform include tools for managing commissions or sales teams?",
    answer:
      "Yes! With our Commission and Sales Agent tools, you can easily track team performance, assign sales targets, and motivate your agents with clear and customizable commission structures. This is perfect for agencies looking to scale and incentivize their team to deliver top-notch results.",
  },
  {
    question: "I don't know much about social media marketing. Will this still work for me?",
    answer:
      "Absolutely! Attention Keeper's Social Media Automation tools are designed to make marketing easy, even for beginners. From scheduling templates to post suggestions, we'll help you create and manage your social media presence effortlessly—so you can attract new clients while focusing on running your agency.",
  },
  {
    question: "Can I customize the software to fit my agency's needs?",
    answer:
      "Yes! Attention Keeper offers flexibility with custom fields, forms, and workflows, so you can tailor the platform to match your unique processes. Whether it's creating personalized itineraries, tracking custom metrics, or adapting tools to fit your style, you're in control of how the platform works for you.",
  },
  {
    question: "What's the difference between the plans?",
    answer: `Each plan is designed to meet agencies at different stages of growth:

~Captivate ($159/month): Core tools to get started and stay organized.
~Engage ($497/month): Advanced tools and automation for growing agencies.
~Thrive ($800/month): Comprehensive solutions for scaling fast with powerful analytics and features.

Check the pricing section for a detailed comparison to find the perfect fit for your agency.`,
  },
  {
    question: "What if I don't like the platform after signing up?",
    answer:
      "No problem! If you're in your free trial, you can stop at any time with no charges. If you're on a paid plan and decide it's not the right fit, you can cancel your subscription without penalties. We want you to love Attention Keeper, and if you don't, there's no obligation to stay.",
  },
  {
    question: "How does Attention Keeper help me grow my agency?",
    answer:
      "Attention Keeper helps you focus on growth by automating repetitive tasks, streamlining workflows, and giving you data-driven insights into your clients and revenue. With tools like client retention management, financial tracking, and social media automation, you'll save time, impress your clients, and position your agency as a professional, modern operation.",
  },
  {
    question: "What if I need a feature that isn't available yet?",
    answer:
      "We're constantly improving Attention Keeper and adding new features based on user feedback. If there's a tool or integration you'd like to see, let us know—we're here to make sure Attention Keeper evolves to meet your needs.",
  },
];

const comparisonData = {
  features: [
    "Booking & Itinerary Management",
    "Automated Client Retention",
    "Payment & Invoicing Automation",
    "Marketing/Social Media Tools",
    "Multi-Channel Communication",
    "Customization (Menus/Fields)",
    "Reporting & Analytics",
    "Integrations (GDS, API Access)",
    "Scalability (Users & Workspaces)",
    "Mobile Access",
    "Pricing (Starting Point)",
  ],
  companies: [
    "Attention Keeper",
    "Zoho CRM Plus",
    "Moonstride",
    "Navan",
  ],
  data: {
    "Attention Keeper": [
      "✅ Included",
      "✅ Built-In",
      "✅ Automated",
      "✅ Full SMM Suite",
      "✅ Call/Email/SMS",
      "✅ Side Menu & vCard",
      "✅ CRM + SMM",
      "✅ Thrive Plan Only",
      "✅ 1-100+ Workspaces",
      "✅ Mobile-Friendly",
      "$400/month",
    ],
    "Zoho CRM Plus": [
      "⚠️ Add-On",
      "✅ CRM Core",
      "❌ Manual",
      "⚠️ Email Only",
      "⚠️ Email Only",
      "✅ Custom Fields",
      "✅ CRM Only",
      "⚠️ Add-On",
      "✅ Per Plan",
      "✅ Mobile App",
      "$57/user/month",
    ],
    Moonstride: [
      "✅ Core Feature",
      "✅ CRM Core",
      "✅ Automated",
      "❌ None",
      "⚠️ Email Only",
      "⚠️ Basic",
      "✅ CRM Only",
      "✅ API Access",
      "⚠️ Per Plan",
      "⚠️ Limited",
      "$297/month",
    ],
    Navan: [
      "⚠️ Limited to Flights",
      "❌ Not Available",
      "❌ Not Available",
      "❌ None",
      "⚠️ Basic",
      "⚠️ Limited",
      "⚠️ Basic Reports",
      "⚠️ Basic Integration",
      "⚠️ Per Plan",
      "✅ App-Based",
      "$297/month",
    ],
  },
};

const AttentionKeeperIcon = ({ children }: { children: React.ReactNode }) => {
  return <span className="inline-block mr-1">{children}</span>;
};

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  const renderIcon = (cellContent: string, feature: string, company: string) => {
    let icon = null;
    if (cellContent.startsWith("✅")) {
      icon = <span className="mr-1">✅</span>;
    } else if (cellContent.startsWith("⚠️")) {
      icon = <span className="mr-1">⚠️</span>;
    } else if (cellContent.startsWith("❌")) {
      icon = <span className="mr-1">❌</span>;
    }

    if (feature === "Customization (Menus/Fields)" && company === "Zoho CRM Plus") {
      icon = <span className="mr-1">✅</span>;
    }

    if (feature === "Integrations (GDS, API Access)" && company === "Zoho CRM Plus") {
      icon = <span className="mr-1">✅</span>;
    }

    if (feature === "Integrations (GDS, API Access)" && company === "Moonstride") {
      icon = <span className="mr-1">✅</span>;
    }

    return icon;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
        </label>
        <span className="ml-2 font-semibold text-gray-700">
          Annual billing <span className="text-primary">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    scale: plan.isPopular ? 1.05 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border-[1px] p-6 bg-white text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular ? "border-primary border-2 shadow-lg" : "border-gray-200",
              "flex flex-col"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-base font-semibold text-muted-foreground">
                {plan.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  {plan.name === "THRIVE PLAN" ? (
                    "Contact Us"
                  ) : plan.price === "Free" ? (
                    plan.price
                  ) : (
                    <NumberFlow
                      value={
                        isMonthly && plan.price !== "Contact Us" ? Number(plan.price) : isMonthly && plan.price === "Contact Us" ? 0 : !isMonthly && plan.yearlyPrice !== "Contact Us" ? Number(plan.yearlyPrice) : 0
                      }
                      format={{
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      formatter={(value: number) => `$${value}`}
                      transformTiming={{
                        duration: 500,
                        easing: "ease-out",
                      }}
                      willChange
                      className="font-variant-numeric: tabular-nums"
                    />
                  )}
                </span>
                {plan.name !== "THRIVE PLAN" && plan.period !== "Next 3 months" && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              {plan.name !== "THRIVE PLAN" && (
                <p className="text-xs leading-5 text-muted-foreground">
                  {isMonthly ? "billed monthly" : "billed annually"}
                </p>
              )}

              <ul className="mt-5 gap-2 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4" />

              <RainbowButton 
                onClick={() => (window.location.href = plan.href)}
                className={plan.isPopular ? "bg-primary" : ""}
              >
                {plan.buttonText}
              </RainbowButton>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* FAQ Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Comparison Chart */}
      <div className="mt-24 overflow-x-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-gray-900 mb-8">
          Competitor Comparison
        </h2>
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                Feature
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
              >
                <b>Attention Keeper</b>
              </th>
              {comparisonData.companies.slice(1).map((company, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                >
                  {company}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b border-gray-200">
                  {feature}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-200">
                  <b>
                    {renderIcon(comparisonData.data["Attention Keeper"][index], feature, "Attention Keeper")}
                    {comparisonData.data["Attention Keeper"][index].replace(/^[✅⚠️❌]\s*/, "")}
                  </b>
                </td>
                {comparisonData.companies.slice(1).map((company, companyIndex) => {
                  const cellContent = comparisonData.data[company][index];
                  const icon = renderIcon(cellContent, feature, company);
                  const text = cellContent.replace(/^[✅⚠️❌]\s*/, "");

                  return (
                    <td
                      key={companyIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-gray-200"
                    >
                      {icon}
                      {text}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-sm text-gray-500">
          <p>
            <b>Legend:</b>
          </p>
          <p>
            <span className="mr-1">✅</span> - Competitor offers the same or a better version of the feature.
          </p>
          <p>
            <span className="mr-1">⚠️</span> - Competitor has a limited or less effective version.
          </p>
          <p>
            <span className="mr-1">❌</span> - Competitor lacks this feature entirely or does not focus on it.
          </p>
          <a href="#" className="text-primary">
            See the Difference - 7 Day Free Trial Awaits
          </a>
        </div>
      </div>
    </div>
  );
}
