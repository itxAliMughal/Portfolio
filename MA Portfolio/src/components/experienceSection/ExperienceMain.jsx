import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="experience" className="w-full max-w-[1200px] mx-auto px-2 sm:px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block hidden"></div>
      <h2 className="text-3xl sm:text-4xl text-cyan font-bold text-center mt-8">Client Reviews</h2>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
      >
        <div className="p-6 border border-orange rounded-lg shadow-lg bg-darkBrown">
          <h3 className="text-cyan text-xl font-bold">Michael Johnson</h3>
          <p className="text-lightGrey">USA</p>
          <p className="text-orange">★★★★★</p>
          <p className="text-white mt-2">Excellent work and great communication! Muhammad Ali developed a custom e-commerce platform for my business, which was delivered on time and exceeded expectations.</p>
        </div>
        <div className="p-6 border border-orange rounded-lg shadow-lg bg-darkBrown">
          <h3 className="text-cyan text-xl font-bold">Ahmed Khan</h3>
          <p className="text-lightGrey">UAE</p>
          <p className="text-orange">★★★★☆</p>
          <p className="text-white mt-2">Very professional and delivered on time. Muhammad Ali created a mobile app for my startup, and the quality of work was exceptional and met all requirements.</p>
        </div>
        <div className="p-6 border border-orange rounded-lg shadow-lg bg-darkBrown">
          <h3 className="text-cyan text-xl font-bold">Ali Raza</h3>
          <p className="text-lightGrey">Pakistan</p>
          <p className="text-orange">★★★★★</p>
          <p className="text-white mt-2">Amazing experience working with Muhammad Ali. He developed a portfolio website for me, showcasing his expertise and dedication.</p>
        </div>
        <div className="p-6 border border-orange rounded-lg shadow-lg bg-darkBrown">
          <h3 className="text-cyan text-xl font-bold">Emily Smith</h3>
          <p className="text-lightGrey">Canada</p>
          <p className="text-orange">★★★★★</p>
          <p className="text-white mt-2">Muhammad Ali is a fantastic developer. He designed a responsive blog platform for my company, bringing our vision to life with creativity and attention to detail.</p>
        </div>
        <div className="p-6 border border-orange rounded-lg shadow-lg bg-darkBrown">
          <h3 className="text-cyan text-xl font-bold">Rajesh Kumar</h3>
          <p className="text-lightGrey">India</p>
          <p className="text-orange">★★★★☆</p>
          <p className="text-white mt-2">Great work and timely delivery. Muhammad Ali developed a CRM tool for my business, showcasing his top-notch skills and professionalism.</p>
        </div>
        <div className="p-6 border border-orange rounded-lg shadow-lg bg-darkBrown">
          <h3 className="text-cyan text-xl font-bold">Sophia Lee</h3>
          <p className="text-lightGrey">Australia</p>
          <p className="text-orange">★★★★★</p>
          <p className="text-white mt-2">Working with Muhammad Ali was a pleasure. He created a custom booking system for my travel agency, ensuring the project's success with his expertise.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceMain;
