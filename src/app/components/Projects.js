import { useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"


export default function Projects() {
    const halloweenHome = "../../projectshots/halloweenhome.png"
    const halloweenGames = "../../projectshots/halloweengames.png"
    const halloweenMusic = "../../projectshots/halloweenmusic.png"
    const swansonquote = "../../projectshots/swanquote.png"
    const swansonquote2 = "../../projectshots/swanquote2.png"
    const swansonsearch = "../../projectshots/swansearch.png"
    const noteclanhome = "../../projectshots/noteclanhome.png"
    const noteclanbookings = "../../projectshots/noteclanbookings.png"
    const noteclanform = "../../projectshots/noteclanform.png"
    const dogcarousel = "../../projectshots/dogcarousel.png"
    const catcarousel = "../../projectshots/bettercatcarousel.png"
    const popup = "../../projectshots/popup.png"
    const didneyclontop = "../../projectshots/didneyclontop.png"
    const didneyclonmid = "../../projectshots/didneyclonmid.png"
    const didneyoverlay = "../../projectshots/didneyoverlay.png"




    const projects = [
        {
            title: "Halloween",
            images: [halloweenHome, halloweenGames, halloweenMusic],
            text: "This was the very first website that I built, before I had even started at CodeClan. Written in HTML and CSS, held together with Bootstrap. I really enjoyed making this site as it's all about my favourite day of the year - Halloween!",
            stack: "HTML, CSS, Bootstrap"
        },
        {
            title: "Swansonator",
            images: [swansonquote2, swansonsearch],
            text: "I made this Ron Swanson quote generator one day over Christmas break to practice using RESTful APIs. The 'New Quote' button returns a new quote from the API and the search bar searches for quotes based on user input. I kept the styling simple to reflect the character. I had a lot of fun with this silly little project!",
            stack: "React, RESTful API"
        },
        {
            title: "NoteClan",
            images: [noteclanhome, noteclanform, noteclanbookings],
            text: "This was my first project at CodeClan, written in Python, Flask and MongoDB, inspired by my own struggles in booking rehearsal space for singing practice. This is a basic CRUD app with 90s-inspired styling.",
            stack: "Python, Flask, MongoDB"
        },
        {
            title: "FurFinder",
            images: [dogcarousel, catcarousel, popup],
            text: "This was a group project written in React. It is a pretend animal adoption service designed to resemble Tinder. I was mainly responisble for the styling, writing up the animal database and writing the carousels which showed all available cats and dogs. My team and I got along extremely well, we were able to clearly and evenly divide up the tasks and we had fun!",
            stack: "React, MongoDB"
        },
        {
            title: "Disney Clone",
            images: [didneyclontop, didneyclonmid, didneyoverlay],
            text: "Using React, Tailwind and Vite, I set out to make a simple copy of Disney's UI. I used TMDB's API to populate the page with films and TV Shows, though I wasn't able to show trailers for each as the API lacks videos. This project helped me to learn Tailwind and it is now my favourite styling framework!",
            stack: "Next.js, Tailwind, Axios, Vite"
        },
    ]
    

    const [selectedId, setSelectedId] = useState(null)
   
   

    const elementPoint = useRef(null);

    const shiftLeft=(element)=>{
      element.scrollLeft-=500;
    }
  
    const shiftRight=(element)=>{
      element.scrollLeft+=500;
      
    }
   



    return(
        <div>

            <div className="md:flex md:flex-col md:w-auto md:m-4 md:gap-3 md:pt-8 " >

            <div className="flex justify-center">
            <div className="lg:flex lg:flex-row lg:justify-evenly lg:w-3/4 text-center sm:h-svh sm:grid sm:grid-rows-2">
            {projects.map((item, index) => (
                <motion.div layoutId={index} className="bg-green-300 dark:bg-violet-300 dark:text-black lg:h-14 sm:h-5 rounded-sm px-2 lg:w-40 ">
                        <motion.p onClick={() => setSelectedId(index)} className="font-semibold md:text-lg sm:text-sm hover:cursor-pointer">{item.title}</motion.p>
                        <motion.p className="truncate md:text-sm sm:text-xs opacity-80" onClick={() => setSelectedId(null)}>{item.stack}</motion.p>
                </motion.div>
            ))}
            </div>
            </div>

              

            
                {selectedId !== null && (
                    <AnimatePresence>
                        
                        <motion.div className="flex justify-center  ">
                            <motion.div onClick={() => setSelectedId(null)} className="flex justify-center border-solid border-green-300 dark:border-violet-300 border-2 border-b-4 md:h-[32rem] md:w-[63rem] rounded-sm sm:h-svh sm:w-1">
                                <motion.div layoutId={selectedId}   >
                                    <motion.div className="flex justify-between border-solid border-green-300 dark:border-violet-300 border-b-4 bg-green-300 dark:bg-violet-300 relative overflow-x-auto">
                                    <motion.p className="text-3xl font-semibold py-4 px-2 text-black">{projects[selectedId].title}</motion.p>
                                    <motion.p className="text-2xl font-light italic py-4 px-2 text-violet-950 dark:text-green-950">{projects[selectedId].stack}</motion.p>
                                    </motion.div>
                                        <motion.div ref={elementPoint} className="flex flex-row h-[150px] overflow-x-auto no-scrollbar scroll-smooth justify-around my-4 snap-x transition-all duration-200 ease-in">
                                            {projects[selectedId].images.map((item, index) => (
                                                    <AnimatePresence>
                                                        <motion.img 
                                                    src={item} 
                                                    key={index} 
                                                    initial={{ x: 600, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: -600, opacity: 0 }}
                                                    className="flex justify-between rounded-sm snap-center"/>
                                                    </AnimatePresence>
                                            ))}
                                        </motion.div>
                                    <motion.p className="text-lg pt-8 px-2 ">{projects[selectedId].text}</motion.p>
                                    <motion.p className="pt-10 text-sm text-slate-900 dark:text-slate-300 italic text-center">Click this window to close</motion.p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        
                    </AnimatePresence>
                )}

               

            </div>

        </div>
            
        
    )
}