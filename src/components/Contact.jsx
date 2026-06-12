import { motion } from "framer-motion";

import { FaMapMarkerAlt ,FaEnvelope,FaPhone} from "react-icons/fa";
import { FaGithub,FaLinkedin,FaInstagram,FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-dark-200"
      id="Contact"
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center text-gray-300 mb-4'>
                Get In
                <span className='text-purple-500'>Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>I'm currently open to new opportunities and collaborations. Feel free to reach out to me for any inquiries or just to say hi!</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/* Contact Form */}
                <div> 
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor='name' className='block text-gray-300 mb-2'> Your Name</label>
                            <input
                             className='w-full bg-dark-300 border border-dark-400 text-gray-300 rounded-lg px-4 py-3 outline-none'
                             type="text"
                            //  placeholder='Your Name'
                            />
                        </div>
                         <div>
                            <label htmlFor='email' className='block text-gray-300 mb-2'> Email Address</label>
                            <input
                             className='w-full bg-dark-300 border border-dark-400 text-gray-300 rounded-lg px-4 py-3 outline-none'
                             type='email'
                            //  placeholder='Your Email'
                            />
                        </div>
                         <div>
                            <label htmlFor='message' className='block text-gray-300 mb-2'> Your Message</label>
                            <textarea
                             className='w-full h-40 bg-dark-300 border border-dark-400 text-gray-300 rounded-lg px-4 py-3 outline-none'
                            //  placeholder='Your Message'
                            >
                            </textarea>
                        </div>
                        <button type='submit' className='w-full px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300 cursor-pointer'>
                            Send
                        </button>
  
                    </form>
                </div>
                {/* Contact Information */}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-white text-2xl mr-4'>
                            <FaMapMarkerAlt/>
                        </div>
                        <div>
                            <h3 className='text-lg text-white font-semibold mb-2'>Location</h3>
                            <p className='text-gray-400'>KIET Deemed To Be University, Ghaziabad, India</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-white text-2xl mr-4'>
                            <FaEnvelope/>
                        </div>
                        <div>
                            <h3 className='text-lg text-white font-semibold mb-2'>Email</h3>
                            <p className='text-gray-400'>lalu6575@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-white text-2xl mr-4'>
                            <FaPhone/>
                        </div>
                        <div>
                            <h3 className='text-lg text-white font-semibold mb-2'>Phone</h3>
                            <p className='text-gray-400'>+91 9774612001</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h3 className='text-lg text-white font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a href='https://github.com/lalbabukumar12' className='w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center text-xl text-black-200 shadow-lg hover:bg-purple-500 hover:text-white transition duration-300'>
                                <FaGithub/>
                            </a>

                             <a href='https://www.linkedin.com/in/lalbabu-kumar-7b658829a/' className='w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center text-xl text-blue-500 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300'>
                                <FaLinkedin/>
                            </a>

                             <a href='https://www.instagram.com/lalbabukumar_12/?hl=en' className='w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center text-xl text-pink-200 shadow-lg hover:bg-pink-500 hover:text-white transition duration-300'>
                                <FaInstagram/>
                            </a>
                             <a href='#' className='w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center text-xl text-blue-400 shadow-lg hover:bg-blue-400 hover:text-white transition duration-300'>
                                <FaTwitter/>
                            </a>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact
