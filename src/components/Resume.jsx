import { motion } from "framer-motion";

import { IoSchool } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Resume = () => {
  return (
    <section id="resume" className="py-12 lg:py-24 text-white">
      {/* <div className="max-w-6xl mx-auto"> */}
      <div className="max-w-6xl">
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
          Resume
        </motion.div>

        <div className="relative border-l border-[#98cbfd] pl-6 ml-[20px] space-y-12">
          {/* Education */}
          <motion.div
            custom={0}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -left-[42px] top-0 bg-[#033160] p-2 rounded-full border border-[#98cbfd]">
              <IoSchool />
            </span>

            <h2 className="text-[2rem] leading-[48px] sm:text-[3rem] text-[#98cbfd] font-bold pb-[20px] leading-[38px] mt-[18px] mb-[28px]">
              Education
            </h2>
            <p className="text-white/60 mb-4 text-lg">2020 – 2021</p>

            <motion.div
              custom={0}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-[#395064] mb-[38px]"
            >
              <h4 className="font-bold text-[20px]">
                Metriculation in Science
              </h4>
              <p className="text-lg">Metropolis Academy</p>
              <p className="text-white/60 mt-2 text-md">
                Completed Matriculation in Science with a strong foundation in
                mathematics, physics, and problem-solving skills.
              </p>
            </motion.div>

            <p className="text-white/60 mb-4 text-lg">2021 – 2023</p>
            <motion.div
              custom={0}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-[#395064] mb-[38px]"
            >
              <h4 className="font-bold text-[20px]">
                Intermediate in Pre-Medical
              </h4>
              <p className="text-lg">Formen College</p>
              <p className="text-white/60 mt-2 text-md">
                Completed Intermediate in Pre-Medical with a strong foundation
                in biology, chemistry, and analytical problem-solving skills.
              </p>
            </motion.div>

            <p className="text-white/60 mb-4 text-lg">2023 – 2025</p>
            <motion.div
              custom={0}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-[#395064] mb-[38px]"
            >
              <h4 className="font-bold text-[20px]">MERN Stack Development</h4>
              <p className="text-lg">Saylani Mass IT Training Program (SMIT)</p>
              <p className="text-white/60 mt-2 text-md">
                Learned full-stack development, REST APIs, authentication,
                databases, and modern frontend frameworks.
              </p>
            </motion.div>

            <p className="text-white/60 mb-4 text-lg">2026 – Now</p>
            <motion.div
              custom={0}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-[#395064] mb-[38px]"
            >
              <h4 className="font-bold text-[20px]">
                Bachelors in Information Technology (BSIT)
              </h4>
              <p className="text-lg">University of Karachi</p>
              <p className="text-white/60 mt-2 text-md">
                Currently pursuing a Bachelor of Science in Information
                Technology at the University of Karachi, focusing on software
                development, databases, and modern computing concepts.
              </p>
            </motion.div>
          </motion.div>

          {/* Experience 1 */}
          <motion.div
            custom={1}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -left-[42px] top-0 bg-[#033160] p-2 rounded-full border border-[#98cbfd]">
              <FaBusinessTime />
            </span>

            <h2 className="text-[2rem] sm:text-[3rem] text-[#98cbfd] font-bold pb-[20px] leading-[38px] mt-[28px] mb-[28px]">
              Experience
            </h2>
            <p className="text-white/60 mb-4 text-lg">2023 – 2025</p>

            <motion.div
              custom={0}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-[#395064] mb-[38px]"
            >
              <h4 className="font-bold text-[20px]">MERN Stack Development</h4>
              <p className="text-lg">Saylani Mass IT Training Program (SMIT)</p>
              <p className="text-white/60 mt-2 text-md">
                Create full-functional Modern Web Applications, Server Ceations,
                by the use of REST APIs, authentication, databases, and modern
                frontend frameworks.
              </p>
            </motion.div>

            <p className="text-white/60 mb-4 text-lg">2024 – Now</p>

            <motion.div
              custom={0}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-[#395064] mb-[38px]"
            >
              <h4 className="font-bold text-[20px]">Software Engineer</h4>
              <p className="text-lg">Matech Consulting & Outsourcing</p>
              <p className="text-white/60 mt-2 text-md">
                Currently working as a Software Engineer at Matech, contributing
                to the development of scalable and efficient softwares &
                products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
