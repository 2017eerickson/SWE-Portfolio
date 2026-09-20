import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      variants={variants}
      initial="initial"
      className="services"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div variants={variants} className="textContainer">
        <p>
          I focus on Improving
          <br />a brands online Impression
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src="./people.webp" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h1>Design</h1>
          <p>
            I bring your ideas to life by defining scope, assessing timelines, and navigating tradeoffs for the best outcome.
          </p>
          <a href="#Contact"><button>GO</button></a>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h1>Develop</h1>
          <p>I build the full-stack application from design to deployment, keeping you updated at every milestone.</p>
          <a href="#Contact"><button>GO</button></a>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h1>Test</h1>
          <p>
            I perform unit and end-to-end testing to ensure everything works as designed and handles edge cases gracefully.
          </p>
          <a href="#Contact"><button>GO</button></a>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h1>launch</h1>
          <p>I handle deployment and secure hosting to get your site live and running. </p>
          <a href="#Contact"><button>GO</button></a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
