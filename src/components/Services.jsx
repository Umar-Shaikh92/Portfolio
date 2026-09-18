import { motion } from "framer-motion";
import { GrServerCluster } from "react-icons/gr";
import { TfiBarChart } from "react-icons/tfi";
import { RiStackLine } from "react-icons/ri";
import { RiCodeSSlashLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsRobot } from "react-icons/bs";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import figma from "../assets/figma.svg";
import bootstrap from "../assets/bootstrap.svg";
import scss from "../assets/scss.svg";
import js from "../assets/js.svg";
import firebase from "../assets/firebase.svg";
import react from "../assets/react.svg";
import nextjs from "../assets/nextjs.svg";
import node from "../assets/node.svg";
import mongo from "../assets/mongo.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import tailwind from "../assets/tailwind.svg";
import express from "../assets/express.svg";
import mui from "../assets/mui.svg";
import python from "../assets/python.svg";
import wordpress from "../assets/wordpress.svg";

import { scrollToSection } from "../scrollToSection.js";

const services = [
  {
    icon: <RiCodeSSlashLine size={42} color="#98cbfd" />,
    title: "Web Development",
    desc: "I create high-performance web applications tailored to business needs and user experience. From concept to deployment, I ensure reliable and scalable solutions.",
  },
  {
    icon: <LuLayoutDashboard size={42} color="#98cbfd" />,
    title: "Frontend Development",
    desc: "I build modern, responsive, and visually engaging user interfaces using the latest frontend technologies. My focus is on performance, accessibility, and creating seamless user experiences.",
  },
  {
    icon: <GrServerCluster size={42} color="#98cbfd" />,
    title: "Backend Development",
    desc: "I build modern, responsive, and visually engaging user interfaces using the latest frontend technologies. My focus is on performance, accessibility, and creating seamless user experiences.",
  },
  {
    icon: <RiStackLine size={42} color="#98cbfd" />,
    title: "MERN Stack Development",
    desc: "I develop full-stack web applications using MongoDB, Express, React, and Node.js. From robust backends to intuitive frontends, I deliver scalable and secure solutions.",
  },
  {
    icon: <TfiBarChart size={42} color="#98cbfd" />,
    title: "SaaS Applications",
    desc: "I build SaaS applications that solve real business problems and drive recurring revenue. Each product is designed for scalability, performance, and long-term success.",
  },
  {
    icon: <BsRobot size={42} color="#98cbfd" />,
    title: "Custom Chatbot Development",
    desc: "I build custom AI chatbots that automate customer interactions, 24/7 streamline support, and enhance user engagement. Each chatbot is tailored to your business needs for accuracy, scalability, and seamless integration.",
  },
];

const skills = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Figma", icon: figma },
  { name: "Wordpress", icon: wordpress },
  { name: "Bootstrap", icon: bootstrap },
  { name: "SCSS", icon: scss },
  { name: "JavaScript", icon: js },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Python", icon: python },
  { name: "Firebase", icon: firebase },
  { name: "React", icon: react },
  { name: "Next JS", icon: nextjs },
  { name: "MUI", icon: mui },
  { name: "Node JS", icon: node },
  { name: "Express JS", icon: express },
  { name: "Mongo DB", icon: mongo },
  { name: "Git", icon: git },
  { name: "Github", icon: github },
];

const Services = () => {
  return (
    <section id="services" className="py-10 text-white">
      {/* Section Heading */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="mb-4"
      >
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
          Services
        </motion.div>

        <h2 className="text-[2rem] leading-[38px] lg:leading-[48px] sm:text-[3rem] text-[#98cbfd] font-bold pb-[20px]">
          What I Offer
        </h2>
      </motion.div>

      {/* Services Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service, i) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            key={i}
            whileHover={{ y: -6 }}
            className="rounded-2xl backdrop-blur-xl p-6 bg-[#003366] bg-[linear-gradient(315deg,_#003366_0%,_#242124_74%)] border-[1px] border-[solid] border-[#98cbfd]"
          >
            {service.icon}
            <h3 className="font-bold text-[1.4rem] mb-3 mt-[20px]">
              {service.title}
            </h3>
            <p className="text-white/70 text-md">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mb-20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span className="text-white/70 text-md">
          If you have any different idea,
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="text-sm lg:text-lg inline-block bg-[#033160] border-[1px] border-[solid] border-[#98cbfd] cursor-pointer text-[aliceblue] px-[22px] py-[10px] rounded-[8px] ml-[6px]"
        >
          Let's discuss it...
        </motion.button>
      </div>

      {/* Skills Section */}
      <div>
        <p className="text-sm uppercase tracking-widest text-white/60 mb-2">
          Technologies I Use
        </p>
        <h2 className="text-[2rem] leading-[48px] sm:text-[3rem] text-[#98cbfd] font-bold pb-[20px]">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16 mx-0 sm:mx-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              layout
              style={{ willChange: "transform" }}
              className="h-full flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#98cbfd] transition-transform duration-300 ease-out hover:scale-110 will-change-transform"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
              <span className="text-[16px] sm:text-[20px] leading-[normal] font-semibold text-center text-white/80">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
