import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Constellate — React Native Relationship Platform",
    img: [
      `${import.meta.env.BASE_URL}constellate/home.png`,
      `${import.meta.env.BASE_URL}constellate/constellation.png`,
      `${import.meta.env.BASE_URL}constellate/planet.png`,
      `${import.meta.env.BASE_URL}constellate/journal.png`,
      `${import.meta.env.BASE_URL}constellate/streak.png`,
      `${import.meta.env.BASE_URL}constellate/affection-feature.png`,
      `${import.meta.env.BASE_URL}constellate/stardust.png`,
      `${import.meta.env.BASE_URL}constellate/mood-feature.png`,
      `${import.meta.env.BASE_URL}constellate/partners.png`,
      `${import.meta.env.BASE_URL}constellate/partner-details.png`,
      `${import.meta.env.BASE_URL}constellate/connect.png`,
      `${import.meta.env.BASE_URL}constellate/settings.png`,
    ],
    desc: "- Built a cross-platform mobile app with React Native, Django, and PostgreSQL\n- Containerized backend infrastructure with Docker\n- Modeled relational data with Django ORM\n- Engineered a custom streak engine and reward system\n- Implemented Google SSO and JWT authentication\n- Achieved 80% test coverage with Maestro and Pytest",
    link: "https://github.com/2017eerickson/Constellate",
  },
  {
    id: 2,
    title: "Aisle Earthlings — AI-Ingerated Grocery Platform",
    img: [`${import.meta.env.BASE_URL}earthlings.png`],
    desc: "- Built a full-stack app with React, Django, and PostgreSQL\n- Integrated Gemini AI to programmatically verify vegan compliance\n- Connected Kroger API for real-time product and store data\n- Implemented JWT authentication throughout\n- CI/CD pipeline with GitHub Actions\n- Deployed to AWS within a two-week sprint",
    link: "https://aisleearthlings.com/",
  },
  {
    id: 3,
    title: "Crochet Corner — Full-Stack Ecommerce Platform",
    img: [`${import.meta.env.BASE_URL}crochetcorner.png`],
    desc: "- Built with React, Django, and PostgreSQL\n- Containerized backend infrastructure with Docker\n- Integrated Stripe Checkout Session API for payments\n- Planned, designed, and shipped MVP in two weeks",
    link: "https://github.com/2017eerickson/crochet-corner",
  },
  {
    id: 4,
    title: "Responsive Ecommerce Storefront — Frontend Only",
    img: [`${import.meta.env.BASE_URL}ecommerce.png`],
    desc: "- Built with vanilla HTML, CSS, and JavaScript\n- Responsive design across shop, blog, contact, and checkout pages",
    link: "https://eerickson2017.github.io/erickae.github.io/ecomerce-project/",
  },
  {
    id: 5,
    title: "Promotional Email Template",
    img: [`${import.meta.env.BASE_URL}thriveEmail.png`],
    desc: "- Responsive, reusable email template\n- Built with HTML, CSS, and Photoshop",
    link: "https://eerickson2017.github.io/erickae.github.io/Promotional-email/",
  },

  {
    id: 6,
    title: "Newsletter Email Template",
    img: [`${import.meta.env.BASE_URL}newsletter.png`],
    desc: "- Built from scratch with HTML, CSS, and JavaScript\n- Translated design mockup into pixel-perfect code\n- Cross-client compatible across email providers",
    link: "https://eerickson2017.github.io/erickae.github.io/Newsletter-email/",
  }
];

const Single = ({ item }) => {
  const ref = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + item.img.length) % item.img.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % item.img.length);

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            {item.img.length === 1 ? (
              <img src={item.img[0]} alt="" />
            ) : (
              <>
                <button className="carouselBtn prevBtn" onClick={handlePrev} aria-label="Previous image">&#8249;</button>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={item.img[currentIndex]}
                    alt=""
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <button className="carouselBtn nextBtn" onClick={handleNext} aria-label="Next image">&#8250;</button>
                <div className="carouselDots">
                  {item.img.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentIndex ? "active" : ""}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>
              {item.title.split(" — ")[0]}
              {item.title.includes(" — ") && (
                <span className="subtitle">{item.title.split(" — ")[1]}</span>
              )}
            </h2>
            <p>{item.desc}</p>
            <button>
              {
                item.link.includes("github.com")                                                                                                                    
                  ? <a href={item.link} target="_blank" rel="noopener noreferrer">See Github</a>                                                                    
                  : item.link.includes("github.io")                                                                                                                 
                  ? <a href={item.link} target="_blank" rel="noopener noreferrer">See Live Demo</a>                                                                 
                  : <a href={item.link} target="_blank" rel="noopener noreferrer">Visit Live Site</a> 
              }
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
