import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiaHomeSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { PiSuitcaseSimple } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { scrollToSection } from "../scrollToSection.js";

const navItems = [
  { icon: <LiaHomeSolid size={20} />, label: "Home", id: "hero" },
  { icon: <IoPersonOutline size={20} />, label: "About", id: "about" },
  { icon: <IoSettingsOutline size={20} />, label: "Services", id: "services" },
  { icon: <MdOutlineAssignment size={20} />, label: "Resume", id: "resume" },
  { icon: <PiSuitcaseSimple size={20} />, label: "Projects", id: "projects" },
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;
        const scrollPos = container.scrollTop;

        if (scrollPos >= offset && scrollPos < offset + height) {
          setActive(item.id);
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-[2.4rem] z-50 w-[94%] max-w-[94%] left-[3%] lg:left-[30%] lg:max-w-[67%] lg:w-[90%]"
    >
      <div className="relative flex items-center gap-6 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-[#98cbfd] shadow-lg">
        {/* ================= Desktop Nav ================= */}
        <div className="hidden md:flex items-center gap-6 w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative text-sm transition flex items-center gap-1 cursor-pointer
                ${active === item.id ? "text-white" : "text-white/60"}
              `}
            >
              {item.icon}
              {item.label}

              {active === item.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#98cbfd] rounded-full"
                />
              )}
            </button>
          ))}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-[8px] bg-[#033160] ml-auto border-[1px] border-[solid] border-[#98cbfd] px-[24px] py-[10px] rounded-[8px] text-[aliceblue] cursor-pointer transition"
          >
            Let's Talk
            <TiMessages size={20} />
          </motion.button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white ml-auto"
        >
          {open ? <IoCloseOutline /> : <IoIosMenu />}
        </button>

        {/* ================= Mobile Menu ================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="
                bg-[#000] absolute top-full left-0 w-full
                rounded-2xl backdrop-blur-xl
                border border-white/20 p-4
                flex flex-col gap-4 md:hidden
              "
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 text-white cursor-pointer"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => {
                  scrollToSection("contact");
                  setOpen(false);
                }}
                className="inline-block bg-[#033160] border-[1px] border-[solid] border-[#98cbfd] cursor-pointer text-[aliceblue] px-[22px] py-[10px] rounded-[8px] ml-[6px]"
              >
                Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
