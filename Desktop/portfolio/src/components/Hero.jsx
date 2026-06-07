import { motion } from "framer-motion";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      //   animate={{opacity:1,y:0}}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/*  left side*/}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple-500">Lalbabu Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Passionate developer who enjoys building websites, learning new technologies, and solving problems through code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#Projects"
              className="px-6 py-3 bg-purple-500 rounded-lg  font font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#Contact"
              className="px-6 py-3 bg-purple-300 rounded-lg  font font-medium hover:bg-purple-700 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-500 opacity-75">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                     duration: 4, 
                     repeat: Infinity, 
                     repeatType: "loop",
                    ease: "easeInOut"
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
                src={assets.profileImg}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
