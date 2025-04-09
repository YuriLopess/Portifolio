import { motion } from 'framer-motion';
import { Award, Code, Dumbbell, Music, Heart } from 'lucide-react';
import img from '../assets/image/about_img.jpg'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#212121]">About Me</h2>
            <p className="text-[#323232] mb-16">My introduction</p>
          </div>

          <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-8 md:gap-16 items-start">
            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="aspect-square rounded-[2rem] overflow-hidden bg-gray-100 max-w-md mx-auto"
              >
                <img
                  src={img}
                  alt="About Me"
                  className="w-full h-full object-cover grayscale"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 md:space-y-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-[2rem] p-6 md:p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code className="w-6 md:w-8 h-6 md:h-8 text-[#212121]" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#212121]">Technology</h3>
                  <p className="text-[#323232] mb-1 text-sm md:text-base">Java Specialist</p>
                  <p className="text-[#323232] text-sm md:text-base">Spring Boot Developer</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-[2rem] p-6 md:p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="w-6 md:w-8 h-6 md:h-8 text-[#212121]" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#212121]">Education</h3>
                  <p className="text-[#323232] mb-1 text-sm md:text-base">Software Engineering</p>
                  <p className="text-[#323232] text-sm md:text-base">FIAP University</p>
                </motion.div>
              </div>

              <p className="text-[#323232] text-base md:text-lg leading-relaxed">
                I'm a Christian, and my faith guides my values and the way I work. I like to keep a balance between technology and an active lifestyle, hitting the gym and going for runs whenever I can. I also love music and often find myself listening to Tom Jobim, Frank Sinatra, and classics from bossa nova and jazz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      whileHover={{ rotate: 20 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white p-2 rounded-lg"
                    >
                      <Heart className="w-5 h-5 text-[#212121]" />
                    </motion.div>
                    <span className="text-[#323232]">Christian</span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      whileHover={{ rotate: 20 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white p-2 rounded-lg"
                    >
                      <Dumbbell className="w-5 h-5 text-[#212121]" />
                    </motion.div>
                    <span className="text-[#323232]">Fitness Enthusiast</span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      whileHover={{ rotate: 20 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white p-2 rounded-lg"
                    >
                      <Music className="w-5 h-5 text-[#212121]" />
                    </motion.div>
                    <span className="text-[#323232]">Jazz & Bossa Nova</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;