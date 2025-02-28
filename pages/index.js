import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Limk from 'next/link'
import Head from "next/head";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <Head>
        <title>Welcome to Adeboye Thompson</title>
      </Head>
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 
      to-black/10"
      >
        <div
          className="text-center flex flex-col justify-center 
        xl:pt-40 xl:text-left h-full container mx-auto"
        >
          <motion.h1
            className="h1"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Physical Reality</span>
          </motion.h1>
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Innovating is not just a job for me, its a passion and my obesession. 
              Whatever your idea: to build a mobile application, a desktop application, 
              a new electronic gadget or even fabricate a new product, I and my team will bring your idea to life if you can pay for it.
          </motion.p>
          <div className="flex justify-center xl:hidden relative z-40">
         
            <ProjectsBtn />
            
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex justify-left  relative"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
        w-full h-full xl:bg-no-repeat absolute mix-blend-color-dodge translate-z-0"
        >   </div>
          <ParticlesContainer/>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{duration:1,ease:'easeInOut'}}
            className="w-full 
            h-full max-w-[631px] max-h-[563px] 
            absolute -bottom-32 lg:bottom-0
lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
     
      </div>
    </div>
  );
};

export default Home;
