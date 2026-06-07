import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaChartBar,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

const skillsData = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description: "Building responsive and modern web applications.",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  },
  {
    icon: FaDatabase,
    title: "Database",
    description: "Managing and working with databases efficiently.",
    tags: ["SQL", "MongoDB"],
  },
  {
    icon: FaBrain,
    title: "Machine Learning",
    description: "Building intelligent systems using ML libraries.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Keras"],
  },
  {
    icon: FaChartBar,
    title: "Data Analytics",
    description: "Analyzing and visualizing data for insights.",
    tags: ["Pandas", "NumPy", "Tableau", "EDA"],
  },
  {
    icon: FaCloud,
    title: "Cloud & Networking",
    description: "Understanding cloud computing and networking.",
    tags: ["AWS", "Computer Networks"],
  },
  {
    icon: FaCode,
    title: "Programming & DSA",
    description: "Strong problem-solving and coding skills.",
    tags: ["C++", "Java", "Python", "LeetCode", "DSA"],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="Skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          My
          <span className="text-purple-500"> Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are some technologies and skills I work with.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-dark-300 p-6 rounded-2xl hover:-translate-y-2 transition duration-300 cursor-pointer shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-12 h-12 text-purple-500 mr-4" />
                  <h3 className="text-xl text-white font-semibold">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-4">{skill.description}</p>

                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
