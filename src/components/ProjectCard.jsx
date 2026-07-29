import { motion } from "framer-motion";
import { IoIosGlobe } from "react-icons/io";
import { TbCodeDots } from "react-icons/tb";


const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5">
      {/* Image */}
      <motion.div whileHover={{ scale: 1.03 }}>
        <img
          src={image}
          alt={title}
          className="rounded-xl mb-4 h-60 w-full object-cover"
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>

      {/* Description */}
      <p className="text-sm text-white/70 mb-3">{description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-full bg-white/10 text-white"
          >
            {item}
          </span>
        ))}
      </div>

      {/* {Buttons} */}
      <div className="flex gap-[12px] mt-[26px]">
        <a
          href="#"
          className="px-[10px] py-[5px] [transition:0.3s] rounded-[6px] inline-flex items-center gap-[8px] border-[1px] border-[solid] border-[white] bg-[#033160]"
        >
          <IoIosGlobe size={20} /> Live Preview
        </a>
        <a
          href="#"
          className="px-[10px] py-[5px] [transition:0.3s] rounded-[6px] inline-flex items-center gap-[8px] border-[1px] border-[solid] border-[white] [transition:1s_ease] bg-transparent hover:bg-[linear-gradient(-225deg,_#FF057C_0%,_#8D0B93_50%,_#321575_100%)] hover:outline-[#8e32ac]"
        >
          <TbCodeDots size={20} /> Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
