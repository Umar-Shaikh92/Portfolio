// import Hero from "../components/Hero";
// import Services from "../components/Services";
// import Resume from "../components/Resume";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import About from "../components/About";
// import Copyright from "../components/Copyright";

// const Page = () => {
//   return (
//     <div className="mt-[90px]">
//       <section id="hero">
//         <Hero />
//       </section>

//       <section id="about">
//         <About />
//       </section>

//       <section id="services">
//         <Services />
//       </section>

//       <section id="resume">
//         <Resume />
//       </section>

//       <section id="projects">
//         <Projects />
//       </section>

//       <section id="contact">
//         <Contact />
//       </section>

//       <Copyright />
//     </div>
//   );
// };

// export default Page;





import Hero from "../components/Hero";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Copyright from "../components/Copyright";

const Page = () => {
  return (
    <>
      {/* FixedCard component should be rendered here or in parent component */}
      
      {/* Main content with left margin for desktop */}
      <div className="mt-[90px] px-0 lg:px-8">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Copyright />
      </div>
    </>
  );
};

export default Page;