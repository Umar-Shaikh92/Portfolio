import ProjectCard from "./ProjectCard";
import image from "../assets/project-ph-1.jpeg";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      category: "Dynamic Websites",
      projects: [
        {
          title: "Company Portfolio",
          description: "Dynamic business website with CMS integration.",
          // image: "/assets/dynamic1.png",
          image: image,
          tech: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Agency Website",
          description: "Responsive agency site with animations.",
          image: "/assets/dynamic2.png",
          tech: ["React", "Tailwind"],
        },
      ],
    },
    {
      category: "Full-Stack Web Applications",
      projects: [
        {
          title: "E-Commerce App",
          description: "Full MERN stack e-commerce platform.",
          image: "/assets/app1.png",
          tech: ["MongoDB", "Express", "React", "Node"],
        },
        {
          title: "Job Portal",
          description: "Job listing app with authentication.",
          image: "/assets/app2.png",
          tech: ["React", "Node", "JWT"],
        },
        {
          title: "Dashboard System",
          description: "Admin dashboard with role management.",
          image: "/assets/app3.png",
          tech: ["React", "Chart.js"],
        },
        {
          title: "SaaS Platform",
          description: "Subscription-based SaaS application.",
          image: "/assets/app4.png",
          tech: ["Next.js", "Stripe"],
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-10">
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
        Projects
      </motion.div>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-[2rem] leading-[38px] sm:leading-[48px] sm:text-[3rem] text-[#98cbfd] font-bold pb-[20px]"
      >
        My Featured Projects
      </motion.h2>

      {projectsData.map((group, index) => (
        <div key={index} className="mb-14">
          {/* Category Heading */}
          <h3 className="text-xl font-semibold text-white/90 mb-6">
            {group.category}
          </h3>

          {/* Cards */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {group.projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
