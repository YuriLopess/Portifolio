import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, Lock } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  githubUrl: string;
  tags: string[];
  isLocked?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern portfolio built with React and Framer Motion",
    longDescription: "A modern, animated portfolio website built using React, TypeScript, and Framer Motion. Features smooth animations, responsive design, and dynamic content loading.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/yourusername/portfolio",
    tags: ["React", "TypeScript", "Framer Motion"]
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Full-stack task management application",
    longDescription: "A comprehensive task management system with real-time updates, user authentication, and collaborative features. Built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/yourusername/task-manager",
    tags: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced features",
    longDescription: "A scalable e-commerce platform with features like product management, cart functionality, payment integration, and order tracking.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/yourusername/ecommerce",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "Project under development",
    longDescription: "",
    githubUrl: "#",
    tags: ["React"],
    isLocked: true
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Project under development",
    longDescription: "",
    githubUrl: "#",
    tags: ["Next.js"],
    isLocked: true
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "Project under development",
    longDescription: "",
    githubUrl: "#",
    tags: ["React"],
    isLocked: true
  }
];

const ProjectsSection: FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-[#323232] mb-16">Most recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => !project.isLocked && setSelectedProject(project)}
              className={`group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg ${
                !project.isLocked && 'cursor-pointer hover:shadow-xl transition-shadow'
              }`}
            >
              {project.isLocked ? (
                <div className="aspect-[4/3] w-full bg-gray-100 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    className="text-gray-400"
                  >
                    <Lock className="w-12 h-12" />
                  </motion.div>
                </div>
              ) : (
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/yurilopesdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#212121] text-white rounded-xl hover:bg-[#323232] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View More Projects
          </motion.a>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(null);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-[#323232] mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-[#323232]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#212121] text-white rounded-xl hover:bg-[#323232] transition-colors w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;