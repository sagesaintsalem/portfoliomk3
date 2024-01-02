"use client"

import Current from './components/Current'
import Projects from './components/Projects'
import About from './components/About'
import { useState } from 'react'
import Testimonials from './components/Testimonials'
import { motion, AnimatePresence } from "framer-motion";


const PROJECTS = "PROJECTS"
const CURRENT = "CURRENT"
const ABOUT = "ABOUT"
const HOME = "HOME"



export default function Home() {
  const [selectedSection, setSelectedSection] = useState(null)
  const [notSelected, setNotSelected] = useState(false)
  const [isShowingSection, setIsShowingSection] = useState(false);
 

  // function toggleShowSection(){
  //   setIsShowingSection((isShowingSection) => !isShowingSection)
  // }

  function toggleShowHome(){
    // toggleShowSection();
    setSelectedSection(HOME);
  }

  function toggleShowAbout(){
    setSelectedSection(ABOUT);
  }
  

  function toggleShowProjects() {
    // toggleShowSection();
    setSelectedSection(PROJECTS);
    // setNotSelected((notSelected) => !notSelected);
    // console.log(selectedSection);
  }

 

  // The following string and 2 arrays were copied from this url - https://brad-carter.medium.com/how-to-animate-a-text-reveal-effect-in-react-with-framer-motion-ae8ddd296f0d

  const welcome = "Welcome! I'm Rita!"
  

  const sentence = {
    hidden: { opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
 

  return (
    <div className='lg:w-[1517px]  bg-white dark:bg-black'>
    <div className="flex flex-row text-black bg-white dark:text-white dark:bg-black md:text-xl md:pt-3 md:pb-5  md:gap-40 sm:gap-1 sm:pb-2 sm:pt-0 sm:text-sm justify-center">
            <a onClick={toggleShowHome}><h3 className='p-1 active:bg-green-400 hover:bg-green-400 dark:active:bg-violet-300 dark:active:text-black active:rounded-sm dark:hover:bg-violet-300 dark:hover:text-black hover:rounded-sm cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150'>Home</h3></a>
            <a onClick={toggleShowAbout}><h3 className='p-1 active:bg-green-400 hover:bg-green-400 dark:active:bg-violet-300 dark:active:text-black active:rounded-sm dark:hover:bg-violet-300 dark:hover:text-black hover:rounded-sm cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150'>About</h3></a>
            <a onClick={toggleShowProjects}><h3 className='p-1 active:bg-green-400 hover:bg-green-400 dark:active:bg-violet-300 dark:active:text-black active:rounded-sm dark:hover:bg-violet-300 dark:hover:text-black hover:rounded-sm cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150'>Projects</h3></a>
            
            <a
              href="../../files/ToussaintCV-1.pdf"
              download="Rita-Toussaint-CV"
              target="_blank"
              rel="noreferrer"
              >
                  <button className='py-1 px-2 bg-green-400 dark:bg-violet-300 text-black rounded-sm cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150'>My CV</button>
          </a>
    </div>
    
    <div className='py-2 text-black bg-white dark:text-white dark:bg-black h-screen'>

    {selectedSection === null &&
      <>
        <div className='flex flex-col justify-center items-center gap-6 pt-8 '>
          <div className='font-extrabold text-6xl'>
            <motion.p
              
              variants={sentence} 
              initial="hidden" 
              animate="visible">
                {welcome.split("").map((char, index) => {
                  return (
                    <motion.span 
                      key={char + "-" + index} 
                      variants={letter}
                      >
                        {char}
                    </motion.span>
                  )
                })}
                
            </motion.p>
          </div>
          <div>
            <p className='text-3xl'>Click above to explore!</p>
          </div>
      </div>
      </>
    }

    <AnimatePresence >
      
      {selectedSection === HOME && 
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 0.5 }}
        exit={{ opacity: 0 }}>
          <div className='m-4'>
          <div className='flex flex-row pt-3 pb-8 mx-4 justify-center gap-14'>

            <img src='./newchilli.png' title="Me as a chilli pepper" className='h-[200px]' />
            
            <div className='flex flex-col gap-5 justify-center py-10'>
              <p className='inline align-middle text-5xl text-center antialiased font-extrabold'>I'm Rita Toussaint and I'm a CodeClan graduate, <br></br>a career changer, and a web developer!</p>
              <a onClick={toggleShowProjects} className='text-green-600 dark:text-violet-300 text-2xl text-center cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150'>
                My Projects →
            </a>
            </div>
            </div>


              <div className='flex flex-row gap-12 justify-around py-8 px-2 '>
                <div className='grid grid-cols-2 grid-rows-1 gap-4 text-md w-3/4 justify-center'>
                  <Testimonials />
                </div>

                <div className='flex flex-col bg-green-400 dark:bg-violet-300 text-md text-black rounded-sm w-1/4 p-2 '>
                  <div className='flex flex-row gap-3 justify-center'>
                    <a href='https://github.com/sagesaintsalem' target='_blank'><img src='./github.png' alt='Githubs famous squid-cat logo' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150'></img></a>

                    <a href='https://www.linkedin.com/in/rita-toussaint' target='_blank'><img src='./linkedblack.png' alt='Linked In logo in black, shows the word in' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150'></img></a>
                  </div>

                  <div>
                    <p className='underline decoration-solid decoration-black decoration-2 font-semibold py-1'>Stack</p>
                    <ol className='flex flex-wrap list-none px-2 py-1'>
                      <li className='py-0.5 px-2'>React</li>
                      <li className='py-0.5 px-2'>Next.js</li>
                      <li className='py-0.5 px-2'>Tailwind</li>
                      <li className='py-0.5 px-2'>Bootstrap</li>
                      <li className='py-0.5 px-2'>Javascript</li>
                      <li className='py-0.5 px-2'>Python</li>
                      <li className='py-0.5 px-2'>Java</li>
                      <li className='py-0.5 px-2'>Axios</li>
                      <li className='py-0.5 px-2'>Framer Motion</li>

                    </ol>

                    <p className='underline decoration-solid decoration-black decoration-2 font-semibold py-1'>Skills</p>
                    <ol className='flex flex-wrap list-none px-2 py-1'>
                      <li className='py-0.5 px-2'>French</li>
                      <li className='py-0.5 px-2'>Neurodiversity Advocacy</li>
                      <li className='py-0.5 px-2'>Agile</li>
                      <li className='py-0.5 px-2'>App Publishing</li>
                      <li className='py-0.5 px-2'>Teaching</li>

                      
                    </ol>
                  </div>  
                </div>
              </div>
        </div>
        </motion.div>
      }
      
    </AnimatePresence>

    <AnimatePresence >
      {selectedSection === ABOUT &&
        <motion.div         
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 0.5 }}
        exit={{ opacity: 0 }}>
          <About />
          <Current />
        </motion.div>
      }
       </AnimatePresence>
   

    <AnimatePresence >
    {selectedSection === PROJECTS &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 0.5 }}
        exit={{ opacity: 0 }}>
        <Projects/>
      </motion.div>
    }
    </AnimatePresence>

   
    </div>

    </div>
  )
}
