import { Mail, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ff2a2a]/5 dark:to-[#ff2a2a]/10" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff2a2a] to-[#ff6b6b] rounded-lg flex items-center justify-center shadow-lg shadow-[#ff2a2a]/50">
                <span className="text-white font-bold text-xl sm:text-2xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] bg-clip-text text-transparent">
                  Archeey
                </span>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 -mt-1">
                  Master Course
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-md">
              Transform your video editing skills and start creating viral content with our comprehensive CapCut course.
            </p>
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2a2a]" />
              <a
                href="mailto:support@archeey.com"
                className="hover:text-[#ff2a2a] transition-colors"
              >
                support@archeey.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "About", "Pricing", "FAQ"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
                { icon: Facebook, label: "Facebook" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#ff2a2a] hover:to-[#ff6b6b] transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            © {currentYear} Archeey Master Course. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <button className="text-gray-600 dark:text-gray-400 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-600 dark:text-gray-400 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
