import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chioma Adeyemi",
    role: "Content Creator",
    image: "CA",
    rating: 5,
    text: "This course transformed my editing skills completely! I went from basic cuts to creating viral content that gets millions of views. The templates alone are worth the price.",
  },
  {
    name: "Ibrahim Hassan",
    role: "Freelance Editor",
    image: "IH",
    rating: 5,
    text: "Best investment I've made in my career. I'm now charging 3x more for my editing services and clients love the quality. The monetization module changed everything.",
  },
  {
    name: "Blessing Okafor",
    role: "YouTuber",
    image: "BO",
    rating: 5,
    text: "The live sessions are incredible! Getting real-time feedback helped me improve so fast. I landed my first brand deal within 2 months of completing the course.",
  },
  {
    name: "David Mensah",
    role: "Social Media Manager",
    image: "DM",
    rating: 5,
    text: "Professional pack is absolutely worth it. The 1-on-1 mentorship and advanced techniques took my edits to a whole new level. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff2a2a]/5 via-transparent to-[#ff2a2a]/5 dark:from-[#ff2a2a]/10 dark:via-transparent dark:to-[#ff2a2a]/10" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff2a2a]/10 to-[#ff6b6b]/10 border border-[#ff2a2a]/20 dark:border-[#ff2a2a]/30 backdrop-blur-sm mb-4 sm:mb-6">
            <Star className="w-4 h-4 text-[#ff2a2a] fill-[#ff2a2a]" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Student Success Stories
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] bg-clip-text text-transparent">
              Real Results
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              From Real Students
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of successful students who've transformed their careers with Archeey Master Course.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative backdrop-blur-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff2a2a]/20 group"
            >
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-[#ff2a2a]" />
              </div>

              <div className="relative">
                <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#ff2a2a] to-[#ff6b6b] flex items-center justify-center shadow-lg shadow-[#ff2a2a]/30">
                    <span className="text-white font-bold text-base sm:text-lg">
                      {testimonial.image}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2a2a] fill-[#ff2a2a]"
                    />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
