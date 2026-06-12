import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaCode, FaDatabase, FaChartBar, FaLaptopCode } from "react-icons/fa";

const aboutInfo = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    description:
      "Building responsive web applications using MERN Stack, React.js, Node.js, MongoDB, HTML, CSS, and JavaScript.",
  },
  {
    icon: <FaChartBar />,
    title: "Data Analytics & ML",
    description:
      "Experienced in Data Cleaning, EDA, Tableau Dashboards, Machine Learning, Pandas, NumPy, and Scikit-learn.",
  },
  {
    icon: <FaDatabase />,
    title: "Database & Cloud",
    description:
      "Strong understanding of SQL, MongoDB, AWS Cloud Practitioner, and Computer Networking Fundamentals.",
  },
  {
    icon: <FaCode />,
    title: "Problem Solving",
    description:
      "Solved 300+ problems on LeetCode with strong knowledge of DSA, DBMS, OS, and Computer Networks.",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-dark-200 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            About
            <span className="text-purple-500"> Me</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Passionate Full Stack Developer & Data Analyst with expertise in
            MERN Stack, Machine Learning, APIs, and Data Visualization.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src={assets.profileImg}
              alt="Lalbabu Kumar"
              className="rounded-3xl shadow-lg w-full max-w-md mx-auto object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-white mb-5">
              Aspiring Full Stack Developer & Data Analyst
            </h3>

            <p className="text-gray-300 mb-5 leading-7">
              I am an aspiring Full Stack Developer and Data Analyst with
              hands-on experience in MERN stack development, Machine Learning,
              Tableau dashboards, and API-based web applications.
            </p>

            <p className="text-gray-300 mb-8 leading-7">
              Currently pursuing B.Tech in Information Technology at KIET
              University, I enjoy solving real-world problems through
              technology. I have solved 300+ LeetCode problems and built
              projects involving APIs, Data Visualization, and Full Stack
              Development.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {aboutInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-dark-300 rounded-2xl p-6 shadow-md cursor-pointer border border-gray-800"
                >
                  <div className="text-purple-500 text-3xl mb-4">
                    {item.icon}
                  </div>

                  <h4 className="text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-6">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
