import { Video, Users, Award, TrendingUp, Zap, BookOpen } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live Interactive Sessions",
    description: "Join weekly live classes with expert instructors. Get real-time feedback and personalized guidance.",
    gradient: "from-[#ff2a2a] to-[#ff4a4a]",
  },
  {
    icon: Zap,
    title: "Premium Templates",
    description: "Access 50+ professional templates, transitions, and effects to speed up your editing workflow.",
    gradient: "from-[#ff4a4a] to-[#ff6b6b]",
  },
  {
    icon: Users,
    title: "Exclusive Community",
    description: "Network with fellow creators, share ideas, and collaborate on projects in our private Discord.",
    gradient: "from-[#ff6b6b] to-[#ff8b8b]",
  },
  {
    icon: Award,
    title: "Certification Program",
    description: "Earn a verified certificate upon completion to showcase your skills to clients and employers.",
    gradient: "from-[#ff2a2a] to-[#ff6b6b]",
  },
  {
    icon: TrendingUp,
    title: "Monetization Strategies",
    description: "Learn how to turn your editing skills into income through freelancing and content creation.",
    gradient: "from-[#ff4a4a] to-[#ff8b8b]",
  },
  {
    icon: BookOpen,
    title: "Lifetime Access",
    description: "Get unlimited access to all course materials, updates, and new content added regularly.",
    gradient: "from-[#ff6b6b] to-[#ff2a2a]",
  },
];

export default function Features() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff2a2a]/5 to-transparent dark:via-[#ff2a2a]/10" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff2a2a]/10 to-[#ff6b6b]/10 border border-[#ff2a2a]/20 dark:border-[#ff2a2a]/30 backdrop-blur-sm mb-4 sm:mb-6">
            <Zap className="w-4 h-4 text-[#ff2a2a]" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              What's Included
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              To Become a Pro Editor
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From beginner basics to advanced techniques, we've got you covered with comprehensive training and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff2a2a]/20 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-[#ff2a2a]/30 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
