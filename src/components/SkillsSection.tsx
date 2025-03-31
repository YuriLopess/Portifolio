import { FC, useState } from 'react';
import { Layout, Database, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = {
  frontend: {
    icon: Layout,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
    skills: [
      { name: "HTML", level: 90, status: "Experienced" },
      { name: "CSS", level: 85, status: "Experienced" },
      { name: "JavaScript", level: 85, status: "Experienced" },
      { name: "React", level: 80, status: "Experienced" },
      { name: "Tailwind", level: 80, status: "Experienced" },
      { name: "Vue.js", level: 70, status: "Intermediate" }
    ]
  },
  backend: {
    icon: Database,
    title: "Backend Development",
    description: "Building robust and scalable server-side applications",
    skills: [
      { name: "Java", level: 90, status: "Experienced" },
      { name: "Spring Boot", level: 85, status: "Experienced" },
      { name: "SQL", level: 80, status: "Experienced" },
      { name: "NoSQL", level: 75, status: "Intermediate" },
      { name: "Python", level: 70, status: "Intermediate" }
    ]
  },
  tools: {
    icon: Cpu,
    title: "Development Tools",
    description: "Utilizing modern development tools and practices",
    skills: [
      { name: "Git", level: 85, status: "Experienced" },
      { name: "VS Code", level: 90, status: "Experienced" },
      { name: "CMD", level: 80, status: "Experienced" },
      { name: "IntelliJ IDEA", level: 85, status: "Experienced" },
      { name: "Vite", level: 75, status: "Intermediate" }
    ]
  }
};

const SkillsSection: FC = () => {
  const [activeSkill, setActiveSkill] = useState<string>('frontend');
  const IconComponent = skillsData[activeSkill as keyof typeof skillsData].icon;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Experience</h2>
          <p className="text-[#323232] text-center mb-16">My technical level</p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          >
            {Object.entries(skillsData).map(([key, data], index) => {
              const Icon = data.icon;
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveSkill(key)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition-all ${
                    activeSkill === key 
                      ? 'bg-[#212121] text-white shadow-lg scale-105' 
                      : 'bg-gray-100 text-[#323232] hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: activeSkill === key ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    animate={{ rotate: activeSkill === key ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                  <span className="font-medium text-sm md:text-base whitespace-nowrap">{data.title}</span>
                </motion.button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-8"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 360] }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#212121] text-white p-4 rounded-xl mx-auto md:mx-0"
                >
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
                <div className="text-center md:text-left">
                  <motion.h3 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl font-bold mb-2"
                  >
                    {skillsData[activeSkill as keyof typeof skillsData].title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-[#323232] text-sm md:text-base"
                  >
                    {skillsData[activeSkill as keyof typeof skillsData].description}
                  </motion.p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {skillsData[activeSkill as keyof typeof skillsData].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-gray-50 p-4 rounded-xl hover:shadow-md transition-all"
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex justify-between mb-2"
                    >
                      <span className="font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-[#323232] text-xs md:text-sm px-2 py-1 bg-white rounded-full">
                        {skill.status}
                      </span>
                    </motion.div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-[#212121] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;