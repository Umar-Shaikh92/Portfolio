import { motion } from "framer-motion";
import { scrollToSection } from "../scrollToSection.js";

const About = () => {
  return (
    <section id="about" className="py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs lg:text-base border-[1px] border-[solid] border-[#98cbfd] rounded-[8px] inline-flex items-center gap-[10px] px-[12px] py-[4px] mb-[36px]"
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
        About Me
      </motion.div>

      <motion.h2
      initial={{ y: 40, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.6 }}
        // initial={{ opacity: 0, y: 30 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[2rem] leading-[38px] sm:leading-[54px] sm:text-[3rem] text-[#98cbfd] font-bold pb-[20px]"
      >
        {/* text-[2.5rem] leading-[48px] */}
        Transforming complex problems into innovative digital solutions
      </motion.h2>

      <div className="text-[18px]">
        <p className="pb-[20px]">
          I'm a Mern-stack software engineer and web developer specializing in
          front-end and back-end development. My tech stack includes MERN as
          well as experience with JavaScript, Tailwind, Scss, React, Node.js,
          Express.js and Firebase. I create high-performance web applications
          that drive business success.
        </p>

        <p className="pb-[20px]">
          From creating modern, dynamic web experiences to designing efficient
          server architectures, I'm committed to delivering robust,
          user-centered solutions. Knowledge of MongoDB, Express.js, React.js,
          and Node.js (MERN) makes it easy to integrate front-end and back-end
          components for any project. I focus on developing software that not
          only meets business goals, but exceeds them.
        </p>

        <p className="pb-[20px]">
          I love problem solving, innovation, and clean coding. My mission is to
          create software that makes life easier, business more efficient, and
          users happier.
        </p>

        <p className="pb-[20px]">
          I began my journey at SMIT (Saylani Mass IT Training Program), where I
          built a strong foundation in web development, evolving from a beginner
          with no knowledge of HTML into a MERN stack developer. Today, my
          front-end and back-end expertise allow me to develop scalable and
          complex web applications.
        </p>

        <p className="pb-[20px]">
          Currently, I am a Mern-stack developer, developing web applications,
          e-commerce platforms, and enterprise solutions for companies in
          various sectors. I constantly research new technologies, track
          industry trends, and always provide the best solutions.
        </p>
      </div>

      <div className="text-[18px] mb-[28px]">
        <p className="pb-[20px]">
          If you’re interested in collaborating or have an exciting project in
          mind,
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="text-sm lg:text-lg inline-block bg-[#033160] border-[1px] border-[solid] border-[#98cbfd] cursor-pointer text-[aliceblue] px-[22px] py-[10px] rounded-[8px] ml-[6px]"
        >
          Let's Connect
        </motion.button>
      </div>
    </section>
  );
};

export default About;
