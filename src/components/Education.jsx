import { motion } from "framer-motion"
import { educationData } from "../assets/assets"

const Education = () => {
  return (
<motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-dark-100"
      id="Education"
    >
      <div className="container mx-auto px-6">
        <div className="bg-dark-200 rounded-2xl px-6 py-12 md:px-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Education
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Education is the foundation of my journey, shaping my skills and mindset.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className="relative pl-10 sm:pl-12 border-l-2 border-purple-500 cursor-pointer hover:-translate-y-2 transition duration-300"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full" />

                  <div className="bg-dark-300 rounded-2xl p-6 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-xl text-white font-semibold">
                          {education.College}
                        </h3>
                        <p className="text-gray-400">{education.course}</p>
                      </div>

                      <span className="text-purple-500 font-bold">
                        {education.duration}
                      </span>
                    </div>

                    <p className="text-gray-300">{education.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Education