import { FC, useState, useRef, useEffect } from 'react';
import { GraduationCap, Briefcase, Lock, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QualificationDetails {
  title: string;
  organization: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const qualificationData: Record<string, QualificationDetails[]> = {
  education: [
    {
      title: "Software Engineering",
      organization: "FIAP",
      period: "2024 - 2028",
      description: [
        "Currently pursuing a Bachelor's degree in Software Engineering",
        "Focus on modern software development practices and methodologies",
        "Learning advanced programming concepts and software architecture",
        "Participating in hands-on projects and practical assignments"
      ],
      technologies: ["Java", "Python", "Software Architecture", "Agile Methodologies"]
    }
  ],
  experience: [
    {
      title: "Intern",
      organization: "Banco Pan",
      period: "2024 - Present",
      description: [
        "Automating processes using Python, Selenium, Pandas and OS",
        "Creating and monitoring daily DAGs with Apache Airflow",
        "Building SQL queries and views in Amazon Athena",
        "Developing internal tools with Streamlit for data analysis",
        "Working with AWS services such as S3 and SageMaker"
      ],
      technologies: ["Python", "Airflow", "SQL", "Athena", "S3", "SageMaker", "Streamlit", "Pandas", "Selenium", "AWS"]
    }
  ]
};

const QualificationSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');
  const [selectedQualification, setSelectedQualification] = useState<QualificationDetails | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setLineProgress(0);
            setTimeout(() => {
              const animate = () => {
                setLineProgress(prev => {
                  if (prev < 100) {
                    requestAnimationFrame(animate);
                    return prev + 0.5;
                  }
                  return prev;
                });
              };
              requestAnimationFrame(animate);
              setHasAnimated(true);
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, [hasAnimated]);

  const getTimelineItemOpacity = (index: number) => {
    const threshold = (index + 1) * 33.33;
    return lineProgress >= threshold ? 1 : 0;
  };

  return (
    <section id="qualification" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Qualification</h2>
        <p className="text-[#323232] text-center mb-16">My personal journey</p>
        
        <div className="flex justify-center gap-16 mb-8">
          <div 
            className={`flex items-center gap-2 text-xl font-semibold cursor-pointer transition-colors ${
              activeTab === 'education' 
                ? 'text-[#212121]' 
                : 'text-[#666666] hover:text-[#444444]'
            }`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap className="w-6 h-6" />
            Education
          </div>
          <div 
            className={`flex items-center gap-2 text-xl font-semibold cursor-pointer transition-colors ${
              activeTab === 'experience' 
                ? 'text-[#212121]' 
                : 'text-[#666666] hover:text-[#444444]'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase className="w-6 h-6" />
            Experience
          </div>
        </div>

        <div className="relative" ref={timelineRef}>
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#212121]"
            style={{ height: `${lineProgress}%` }}
            transition={{ duration: 8 }}
          />
          
          <AnimatePresence mode="wait">
            {activeTab === 'education' ? (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {qualificationData.education.map((qualification, index) => (
                  <motion.div 
                    key={qualification.title}
                    className="relative flex justify-between items-center"
                    style={{ opacity: getTimelineItemOpacity(index) }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-5/12 text-right pr-8 cursor-pointer group"
                      onClick={() => setSelectedQualification(qualification)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-lg font-semibold group-hover:text-[#212121] transition-colors">
                        {qualification.title}
                      </h3>
                      <p className="text-[#323232]">{qualification.organization}</p>
                      <p className="text-[#323232]">{qualification.period}</p>
                      <motion.div 
                        className="mt-2 text-sm text-[#212121] flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        View Details <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#212121] rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
                {[1, 2].map((_, index) => (
                  <motion.div 
                    key={`locked-${index}`}
                    className="relative flex justify-between items-center"
                    style={{ opacity: getTimelineItemOpacity(index + 1) }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : ''}`}>
                      {index % 2 === 0 && (
                        <div className="flex items-center gap-2 justify-end text-gray-400">
                          <Lock className="w-4 h-4" />
                          <span className="italic">Coming soon...</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-lg"></div>
                    <div className={`w-5/12 ${index % 2 === 1 ? 'pl-8' : ''}`}>
                      {index % 2 === 1 && (
                        <div className="flex items-center gap-2 text-gray-400">
                          <Lock className="w-4 h-4" />
                          <span className="italic">Coming soon...</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {qualificationData.experience.map((qualification, index) => (
                  <motion.div 
                    key={qualification.title}
                    className="relative flex justify-between items-center"
                    style={{ opacity: getTimelineItemOpacity(index) }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-5/12 text-right pr-8 cursor-pointer group"
                      onClick={() => setSelectedQualification(qualification)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-lg font-semibold group-hover:text-[#212121] transition-colors">
                        {qualification.title}
                      </h3>
                      <p className="text-[#323232]">{qualification.organization}</p>
                      <p className="text-[#323232]">{qualification.period}</p>
                      <motion.div 
                        className="mt-2 text-sm text-[#212121] flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        View Details <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#212121] rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
                {[1, 2].map((_, index) => (
                  <motion.div 
                    key={`locked-${index}`}
                    className="relative flex justify-between items-center"
                    style={{ opacity: getTimelineItemOpacity(index + 1) }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : ''}`}>
                      {index % 2 === 0 && (
                        <div className="flex items-center gap-2 justify-end text-gray-400">
                          <Lock className="w-4 h-4" />
                          <span className="italic">Coming soon...</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-lg"></div>
                    <div className={`w-5/12 ${index % 2 === 1 ? 'pl-8' : ''}`}>
                      {index % 2 === 1 && (
                        <div className="flex items-center gap-2 text-gray-400">
                          <Lock className="w-4 h-4" />
                          <span className="italic">Coming soon...</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedQualification && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedQualification(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedQualification.title}</h3>
                    <p className="text-[#323232]">{selectedQualification.organization}</p>
                    <p className="text-[#323232] text-sm">{selectedQualification.period}</p>
                  </div>
                  <button
                    onClick={() => setSelectedQualification(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {selectedQualification.description.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 text-[#212121]" />
                      <p className="text-[#323232]">{item}</p>
                    </motion.div>
                  ))}
                </div>

                {selectedQualification.technologies && (
                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedQualification.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-[#323232]"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QualificationSection;