import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = ['Home', 'About', 'Qualification', 'Experience', 'Projects', 'Contact'];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm'
            : 'py-6 bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a 
                href="#"
                className="relative text-2xl font-bold text-[#212121]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Yuri
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#212121]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => setActiveItem(item.toLowerCase())}
                  className="relative text-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={`relative ${
                    activeItem === item.toLowerCase()
                      ? 'text-[#212121] font-medium'
                      : 'text-[#323232] hover:text-[#212121]'
                  } transition-colors`}>
                    {item}
                    {activeItem === item.toLowerCase() && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#212121]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50 p-2 text-[#212121]"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-white shadow-lg z-40 overflow-hidden"
            >
              <div className="h-full flex flex-col pt-24">
                <div className="flex-1 px-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                      className="py-2"
                    >
                      <motion.button
                        onClick={() => {
                          setActiveItem(item.toLowerCase());
                          setIsMobileMenuOpen(false);
                        }}
                        className={`relative w-full group p-4 text-left transition-all overflow-hidden ${
                          activeItem === item.toLowerCase()
                            ? 'text-[#212121] font-medium'
                            : 'text-[#323232] hover:text-[#212121]'
                        }`}
                        whileHover="hover"
                      >
                        <motion.span 
                          className="relative z-10 text-lg block"
                          variants={{
                            hover: { x: 10 }
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item}
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 bg-gray-50 origin-left"
                          initial={{ scaleX: 0 }}
                          variants={{
                            hover: { scaleX: 1 }
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="p-6 text-center text-sm text-[#323232] border-t border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  © 2025 Yuri Lopes
                </motion.div>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;