import { FC, useState, useRef, useEffect } from 'react';
import { GraduationCap, Briefcase, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QualificationSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');
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
                <motion.div 
                  className="relative flex justify-between items-center"
                  style={{ opacity: getTimelineItemOpacity(0) }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-5/12 text-right pr-8">
                    <h3 className="text-lg font-semibold">Software Engineering</h3>
                    <p className="text-[#323232]">FIAP</p>
                    <p className="text-[#323232]">2024 - 2028</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#212121] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-5/12"></div>
                </motion.div>

                <motion.div 
                  className="relative flex justify-between items-center"
                  style={{ opacity: getTimelineItemOpacity(1) }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-5/12 pl-8">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span className="italic">Coming soon...</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative flex justify-between items-center"
                  style={{ opacity: getTimelineItemOpacity(2) }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-5/12 text-right pr-8">
                    <div className="flex items-center gap-2 justify-end text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span className="italic">Coming soon...</span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-5/12"></div>
                </motion.div>
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
                <motion.div 
                  className="relative flex justify-between items-center"
                  style={{ opacity: getTimelineItemOpacity(0) }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-5/12 text-right pr-8">
                    <h3 className="text-lg font-semibold">Intern</h3>
                    <p className="text-[#323232]">Banco Pan</p>
                    <p className="text-[#323232]">2024 - Present</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#212121] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-5/12"></div>
                </motion.div>

                <motion.div 
                  className="relative flex justify-between items-center"
                  style={{ opacity: getTimelineItemOpacity(1) }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-5/12 pl-8">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span className="italic">Coming soon...</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative flex justify-between items-center"
                  style={{ opacity: getTimelineItemOpacity(2) }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-5/12 text-right pr-8">
                    <div className="flex items-center gap-2 justify-end text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span className="italic">Coming soon...</span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-5/12"></div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;