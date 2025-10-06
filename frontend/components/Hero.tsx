import { Sparkles, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/5 via-transparent to-[#ff2a2a]/5 dark:from-[#ff2a2a]/10 dark:via-transparent dark:to-[#ff2a2a]/10" />
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff2a2a]/20 dark:bg-[#ff2a2a]/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b6b]/20 dark:bg-[#ff6b6b]/30 rounded-full blur-[150px] animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff2a2a]/10 to-[#ff6b6b]/10 border border-[#ff2a2a]/20 dark:border-[#ff2a2a]/30 backdrop-blur-sm mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-[#ff2a2a]" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Join 1,000+ Students Worldwide
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#ff2a2a] via-[#ff4a4a] to-[#ff6b6b] bg-clip-text text-transparent animate-gradient">
              Master CapCut Editing.
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Create Viral Content.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform from a beginner to a professional video editor. Learn cinematic techniques,
            trending effects, and monetization strategies with our comprehensive CapCut course.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#ff2a2a] text-white shadow-2xl shadow-[#ff2a2a]/40 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              Get Starter Pack
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToPricing}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#ff2a2a] text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 group dark:border-[#ff2a2a] dark:text-[#ff2a2a]"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Go Professional
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: "100+", label: "Video Lessons" },
              { number: "50+", label: "Premium Templates" },
              { number: "24/7", label: "Community Support" },
              { number: "100%", label: "Certificate Guaranteed" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="backdrop-blur-sm bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff2a2a]/10 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent" />
    </section>
  );
}
