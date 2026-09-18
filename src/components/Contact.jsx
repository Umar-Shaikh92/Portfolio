import { motion } from "framer-motion";
import { GrSend } from "react-icons/gr";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const id = toast.loading("Sending your message...", {
      position: "top-center",
    });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result) => {
          toast.update(id, {
            render: "Message sent successfully!",
            type: "success",
            isLoading: false,
            autoClose: 4000,
          });
          form.current.reset();
        },
        (error) => {
          toast.update(id, {
            render: "Failed to send message. Please try again.",
            type: "error",
            isLoading: false,
            autoClose: 4000,
          });
        },
      );
  };

  return (
    <section id="contact" className="py-12 lg:py-24">
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
          Contact
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[2rem] leading-[38px] sm:leading-[48px] sm:text-[3rem] text-[#98cbfd] font-bold pb-[20px]"
        >
          Let&apos;s make something awesome together!
        </motion.h2>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-[#395064] rounded-2xl p-4 lg:p-8 mb-16">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
              className="bg-transparent border border-white/20 [border-bottom-color:#98cbfd] rounded-lg px-4 py-3 text-white outline-none focus:border-[#98cbfd]"
            />

            <input
              type="email"
              placeholder="Email Address"
              name="user_email"
              required
              className="bg-transparent border border-white/20 [border-bottom-color:#98cbfd] rounded-lg px-4 py-3 text-white outline-none focus:border-[#98cbfd]"
            />

            <input
              type="text"
              placeholder="Company Name"
              name="company_name"
              className="bg-transparent border border-white/20 [border-bottom-color:#98cbfd] rounded-lg px-4 py-3 text-white outline-none focus:border-[#98cbfd]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
              className="bg-transparent border border-white/20 [border-bottom-color:#98cbfd] rounded-lg px-4 py-3 text-white outline-none focus:border-[#98cbfd]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              name="message"
              required
              className="md:col-span-2 bg-transparent border border-white/20 [border-bottom-color:#98cbfd] rounded-lg px-4 py-3 text-white outline-none focus:border-[#98cbfd]"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="cursor-pointer text-sm lg:text-lg w-[fit-content] md:col-span-2 mt-4 inline-flex items-center gap-[10px] justify-center px-8 py-3 rounded-xl bg-[#033160] border border-[#98cbfd] text-white hover:bg-[#04407d] transition"
            >
              Send Message <GrSend size={20} />
            </motion.button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <h4 className="text-lg font-medium mb-2">Location</h4>
            <p className="text-white/70">Karachi, Pakistan</p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Phone</h4>
            <p className="text-white/70">+92-310-2827079</p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Email</h4>
            <p className="text-white/70">umarshaikh66021@gmail.com</p>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={4000}
        style={{ zIndex: 99999 }}
      />
    </section>
  );
};

export default Contact;
