import { FC } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: FC = () => {
  return (
    <header className="min-h-screen pt-20 flex">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Yuri Lopes
            </h1>
            <p className="text-xl md:text-2xl text-[#323232] mb-4">Software Engineer</p>
            <p className="text-[#323232] mb-8 text-base md:text-lg leading-relaxed">
              A passionate 18-year-old software engineer specializing in Java and Spring Boot. Currently interning at Banco Pan while pursuing Software Engineering at FIAP.
            </p>
            <motion.button 
              className="bg-[#212121] text-white px-6 md:px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#323232] transition-colors mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello 
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <Send className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
          <motion.div 
            className="flex justify-center order-first md:order-last"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
                alt="Yuri Lopes"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;