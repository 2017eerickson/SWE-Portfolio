import SideBar from "../sideBar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          intial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.3 }}
          transition={{ duration: 0.8 }}
        >
          Ericka Erickson{" "}
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/erickaerickson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            href="https://github.com/2017eerickson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
