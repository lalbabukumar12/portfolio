import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCards;
