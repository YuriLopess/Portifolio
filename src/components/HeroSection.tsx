import { FC } from 'react';
import { Send, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import img from '../assets/image/home_img.jpg'

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
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.button 
                className="bg-[#212121] text-white px-6 md:px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#323232] transition-colors"
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
              <motion.a 
                href="/resume.pdf"
                className="border-2 border-[#212121] text-[#212121] px-6 md:px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#212121] hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <Download className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </div>
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
                src={img}
                alt="Yuri Lopes"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;