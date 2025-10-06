import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#0a0a0a]/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#ff2a2a] to-[#ff6b6b] rounded-lg flex items-center justify-center shadow-lg shadow-[#ff2a2a]/50">
              <span className="text-white font-bold text-lg sm:text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] bg-clip-text text-transparent">
                Archeey
              </span>
              <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 -mt-1">
                Master Course
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("pricing")}
              className="hidden sm:inline-flex bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#ff2a2a] text-white shadow-lg shadow-[#ff2a2a]/30 transition-all duration-300"
            >
              Enroll Now
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors px-2 py-1"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors px-2 py-1"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors px-2 py-1"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#ff2a2a] dark:hover:text-[#ff2a2a] transition-colors px-2 py-1"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection("pricing")}
                className="w-full bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#ff2a2a] text-white"
              >
                Enroll Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
