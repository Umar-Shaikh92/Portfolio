import { div } from "framer-motion/client";
import { motion } from "framer-motion";
import { scrollToSection } from "../scrollToSection.js";

const Hero = () => {
  return (
    <div className="pb-[46px] pt-[0px] sm:pt-[46px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs lg:text-base border-[1px] border-[solid] border-[#98cbfd] rounded-[8px] inline-flex items-center gap-[10px] px-[12px] py-[4px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="13px"
          height="13px"
          viewBox="0 0 13 13"
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
          ></path>
        </svg>
        Introduction
      </motion.div>

      <div>
        <motion.h1
        initial={{ y: 40, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.6 }}
          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[2.5rem] leading-[46px] sm:text-[4rem] sm:leading-[72px] lg:leading-[84px] text-[#c9e6ff] pt-[28px] font-bold"

          // className="text-[4rem] leading-[84px] text-[#c9e6ff] pt-[28px] font-bold"
        >
          I'm Muhammad Umar, <br /> Software Engineer & Mern Stack Developer
        </motion.h1>
      </div>

      <div className="flex gap-[16px] pt-[36px] ml-[5px]">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("projects")}
          className="bg-[#033160] border-[1px] border-[solid] border-[#98cbfd] text-[aliceblue] cursor-pointer px-[18px] py-[8px] rounded-[8px] flex items-center text-sm lg:text-lg"
        >
          My Projects
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Muhammad_Umar_CV.pdf"
          download
          className="px-6 py-3 bg-white/20 text-[aliceblue] border-[1px] border-[solid] border-[aliceblue] rounded-[8px] flex items-center text-sm lg:text-lg"
        >
          Download CV
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
