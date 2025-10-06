import { Check, Sparkles, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter Pack",
    price: "₦5,000",
    description: "Perfect for beginners ready to start their editing journey",
    icon: Sparkles,
    gradient: "from-[#ff4a4a] to-[#ff6b6b]",
    features: [
      "Access to 50+ video lessons",
      "Basic templates & presets",
      "Community Discord access",
      "Weekly Q&A sessions",
      "Course completion certificate",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional Pack",
    price: "₦15,000",
    description: "For serious creators who want to master every technique",
    icon: Crown,
    gradient: "from-[#ff2a2a] to-[#ff4a4a]",
    features: [
      "Everything in Starter Pack",
      "100+ advanced video lessons",
      "Premium templates library",
      "1-on-1 mentorship sessions",
      "Exclusive masterclasses",
      "Monetization strategies",
      "Portfolio review & feedback",
      "Priority support",
      "Lifetime course updates",
    ],
    cta: "Go Professional",
    popular: true,
  },
];

export default function Pricing() {
  const handleEnroll = (plan: string) => {
    alert(`Enrolling in ${plan}. Payment integration coming soon!`);
  };

  return (
    <section id="pricing" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff2a2a]/5 to-transparent dark:via-[#ff2a2a]/10" />
      
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#ff2a2a]/10 dark:bg-[#ff2a2a]/20 rounded-full blur-[120px] sm:blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#ff6b6b]/10 dark:bg-[#ff6b6b]/20 rounded-full blur-[120px] sm:blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff2a2a]/10 to-[#ff6b6b]/10 border border-[#ff2a2a]/20 dark:border-[#ff2a2a]/30 backdrop-blur-sm mb-4 sm:mb-6">
            <Crown className="w-4 h-4 text-[#ff2a2a]" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Choose Your Path
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Pricing Plans
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your goals. Both plans include lifetime access and regular updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative backdrop-blur-sm bg-white dark:bg-white/5 border-2 ${
                  plan.popular
                    ? "border-[#ff2a2a] shadow-2xl shadow-[#ff2a2a]/30 lg:scale-105"
                    : "border-gray-200 dark:border-gray-800"
                } rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff2a2a]/20`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-lg shadow-[#ff2a2a]/30`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {plan.description}
                </p>

                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      one-time
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => handleEnroll(plan.name)}
                  className={`w-full mb-6 sm:mb-8 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#ff2a2a] text-white shadow-lg shadow-[#ff2a2a]/40"
                      : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                  } transition-all duration-300 hover:scale-105 group text-base sm:text-lg py-5 sm:py-6 rounded-xl`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#ff2a2a] to-[#ff6b6b] flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
