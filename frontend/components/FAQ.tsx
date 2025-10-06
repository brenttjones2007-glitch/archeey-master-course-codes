import { ChevronDown, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any prior editing experience?",
    answer: "Not at all! Our Starter Pack is designed for complete beginners. We start with the basics and gradually move to advanced techniques. If you can operate a smartphone, you can learn CapCut editing with us.",
  },
  {
    question: "What's the difference between Starter and Professional Pack?",
    answer: "The Starter Pack includes 50+ lessons, basic templates, and community access - perfect for beginners. The Professional Pack includes everything in Starter, plus 100+ advanced lessons, premium templates, 1-on-1 mentorship, exclusive masterclasses, and monetization strategies.",
  },
  {
    question: "How long do I have access to the course?",
    answer: "Both plans include lifetime access! You can learn at your own pace and revisit materials anytime. We also provide free updates whenever we add new content.",
  },
  {
    question: "Can I upgrade from Starter to Professional later?",
    answer: "Yes! You can upgrade at any time by paying the difference (₦10,000). Your progress will be preserved and you'll immediately get access to all Professional Pack features.",
  },
  {
    question: "What software do I need?",
    answer: "You only need CapCut, which is completely free and available on iOS, Android, and desktop. We'll guide you through the installation process in the first lesson.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! Both plans include a verified certificate of completion that you can share on LinkedIn, your portfolio, or with potential clients to showcase your skills.",
  },
  {
    question: "Is there a refund policy?",
    answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the course content within the first week, we'll refund your payment, no questions asked.",
  },
  {
    question: "How do the live sessions work?",
    answer: "We host weekly live Q&A sessions where you can ask questions, get feedback on your work, and learn from other students. Sessions are recorded so you can watch them later if you miss one.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff2a2a]/5 to-transparent dark:via-[#ff2a2a]/10" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff2a2a]/10 to-[#ff6b6b]/10 border border-[#ff2a2a]/20 dark:border-[#ff2a2a]/30 backdrop-blur-sm mb-4 sm:mb-6">
            <HelpCircle className="w-4 h-4 text-[#ff2a2a]" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Got Questions?
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Questions
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about the course. Can't find what you're looking for? Contact us at support@archeey.com
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="backdrop-blur-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-2xl px-4 sm:px-6 overflow-hidden hover:bg-white dark:hover:bg-white/10 transition-colors"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900 dark:text-white hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors py-4 sm:py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
