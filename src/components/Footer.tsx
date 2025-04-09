import { FC } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Yuri Lopes
            </motion.h3>
            <p className="text-[#323232] mb-4">Software Engineer</p>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { Icon: Github, url: "https://github.com/YuriLopess" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/yuri-lopes2006/" },
              ].map(({ Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#323232] hover:text-[#212121] transition-colors p-2 hover:bg-gray-100 rounded-full"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <motion.h4 
              className="font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-[#323232] hover:text-[#212121] transition-colors inline-block px-4 py-1 rounded-full hover:bg-gray-100"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-right">
            <motion.h4 
              className="font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact Info
            </motion.h4>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 justify-center md:justify-end text-[#323232]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.div>
                <motion.a 
                  href="mailto:costalopesyuri@gmail.com"
                  className="hover:text-[#212121] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  costalopesyuri@gmail.com
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#323232] inline-block"
                whileHover={{ scale: 1.05 }}
              >
                São Paulo, Brazil
              </motion.li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 text-center text-[#323232]"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            © 2024 Yuri Lopes. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;