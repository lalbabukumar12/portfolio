import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-dark-200"
      id="Projects"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          My
          <span className="text-purple-500"> Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Here are some of the projects I've worked on recently.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              image={p.image}
              tech={p.tech}
              demo={p.demo}
              code={p.code}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;