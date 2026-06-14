import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
// import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Education from '../components/Education'










const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <WorkExperience/> */}
      <Education/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Home