import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Full-Stack Grocery Assistant App",
    img: "../../earthlings.png",
    desc:" Full-stack application built with React, Django, and PostgreSQL, featuring a custom Gemini AI integration that programmatically analyzes product ingredients to verify vegan compliance. Kroger API integration surfaces real-time vegan products and store data, while JWT handles secure authentication throughout. Leveraged Figma's MCP to streamline design-to-Tailwind implementation. Planned, designed, built, tested, and securley deployed using AWS within two weeks.",
    link: "https://aisleearthlings.com",
  },
  {
    id: 2,
    title: "Full-Stack Ecommerce Site",
    img: "../../crochetcorner.png",
    desc: " This is my first Full Stack project built with a React frontend , Django backend and Postgres database. I integrated stripe to sucessfully accept payments via stripes checkout session API. MVP all planned, designed, and built in two weeks. ",
    link: "https://github.com/2017eerickson/crochet-corner",
  },
  {
    id: 3,
    title: "Ecommerce Site",
    img: "../../ecommerce.png",
    desc: " Made in plain CSS, HTML, and JavaSciprt to showcase frontend fundamentals. This is a responsive e-commerce site that has an about, blog, contact, shop, and checkout page.",
    link: "https://eerickson2017.github.io/erickae.github.io/ecomerce-project/",
  },
  {
    id: 4,
    title: "Promotional Email",
    img: "../../thriveEmail.png",
    desc: "This email is a responsive  promotional template , desgined to be reuasble and scalable. Showcasing the fundamentals of HTMl, CSS, and photoshop skills on a high standard marketing level.",
    link: "https://eerickson2017.github.io/erickae.github.io/Promotional-email/",
  },

  {
    id: 5,
    title: "Newsletter Email",
    img: "../../newsletter.png",
    desc: "This is a  responsive newsletter email template recreated to demonstrate skill and ability to perform at a high level with quality, reusuability and consistant compatibilty between email providers in mind. ",
    link: "https://eerickson2017.github.io/erickae.github.io/Newsletter-email/",
  }
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 900,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;
