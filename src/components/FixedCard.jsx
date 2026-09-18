import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./SocialIcons";
import avatar from "../assets/umar.jfif";
import { ImCross } from "react-icons/im";
import { FaUser } from "react-icons/fa";

const FixedCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const closeBtn = document.getElementById("close-panel-btn");
        closeBtn?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Animation variants
  const panelVariants = {
    closed: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  function Slide({ img, description }) {
    return (
      <motion.div exit={{ opacity: 0 }}>
        <img src={img.src} />
        <motion.p exit={{ y: 10 }}>{description}</motion.p>
      </motion.div>
    );
  }

  return (
    <>
      {/* Mobile Toggle Button - Hidden on lg+ */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open profile panel"
        aria-expanded={isOpen}
        className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 
                  bg-gradient-to-r from-[#003366] to-[#242124] text-white 
                  px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl 
                  transition-all duration-300 flex items-center gap-2 border border-[#98cbfd]"
      >
        <FaUser />
        Profile
      </button>

      {/* Overlay Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>

      {/* Desktop Fixed Card (lg+) */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block fixed left-6 top-6 bottom-6 w-[25%] max-w-[400px] z-20"
      >
        <div
          className="bg-[#003366] bg-[linear-gradient(315deg,_#003366_0%,_#242124_74%)] 
                       border-[1px] border-solid border-[#98cbfd] rounded-[16px] 
                       p-5 text-aliceblue h-full overflow-y-auto no-scrollbar"
        >
          <div className="h-full">
            <h2 className="font-['Audiowide',_sans-serif] text-[34px] text-center leading-[40px]">
              Muhammad Umar
            </h2>

            <div className="my-6">
              <img
                src={avatar}
                alt="Muhammad Umar"
                className="rounded-[14px] w-full h-auto"
              />
            </div>

            <div className="mb-6">
              <p className="text-[#98cbfd]">Specialization:</p>
              <h3 className="text-[20px] font-semibold pb-3">
                Software Engineer & A Mern-Stack Developer
              </h3>
              <p className="text-[#98cbfd]">Based in:</p>
              <h3 className="text-[20px] font-semibold">Karachi, Pakistan</h3>
            </div>

            <div className="flex justify-center pt-6">
              <Button />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sliding Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            role="dialog"
            aria-modal="true"
            aria-label="Profile information"
            className="lg:hidden fixed top-0 left-0 h-full w-full max-w-sm z-51"
          >
            <div
              className="bg-[#003366] bg-[linear-gradient(315deg,_#003366_0%,_#242124_74%)] 
                           border-r border-[#98cbfd] rounded-r-[16px] p-5 text-aliceblue h-full 
                           overflow-y-auto shadow-2xl no-scrollbar"
            >
              {/* Close Button */}
              <button
                id="close-panel-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close profile panel"
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full 
                         hover:bg-white/20 transition-colors focus:outline-none 
                         focus:ring-2 focus:ring-white/50"
              >
                <ImCross />
              </button>

              <div className="h-full pt-8">
                <h2 className="font-['Audiowide',_sans-serif] text-[34px] text-center leading-[40px]">
                  Muhammad Umar
                </h2>

                <div className="my-6">
                  <img
                    src={avatar}
                    alt="Muhammad Umar"
                    className="rounded-[14px] w-full h-auto"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-[#98cbfd]">Specialization:</p>
                  <h3 className="text-[20px] font-semibold pb-3">
                    Software Engineer & A Mern-Stack Developer
                  </h3>
                  <p className="text-[#98cbfd]">Based in:</p>
                  <h3 className="text-[20px] font-semibold">
                    Karachi, Pakistan
                  </h3>
                </div>

                <div className="flex justify-center">
                  <Button />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FixedCard;
