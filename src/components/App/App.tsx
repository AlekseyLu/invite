import { motion } from "framer-motion";

import ALEKSEY from "../../app/images/mini-a.png";
import OLESYA from "../../app/images/mini-o.png";

import "./App.css";
import { Timer } from "../Timer";
import { LoveStory } from "../LoveStory";
import { HappyDay } from "../HappyDay/HappyDay";
import { Ceremony } from "../Ceremony/Ceremony";
import { MapContainer } from "../Map";
import { Footer } from "../Footer/Footer";

export const textAnimationRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
    },
  },
};

export const textAnimationLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
    },
  },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

const bg = {
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  hidden: { opacity: 0 },
};

const nav = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
      duration: 1,
    },
  }),
  hidden: { opacity: 0, x: -100 },
};

const MENU = [
  { id: 1, text: "О нас", link: "#" },
  { id: 2, text: "Love Story", link: "#" },
  { id: 3, text: "Программа", link: "#" },
  { id: 4, text: "Церемония", link: "#" },
];

export const App = () => {
  const time = new Date("2024-07-19T18:00:00");
  time.getSeconds();
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={bg}
        className="bg"
      >
        <header>
          <div className="container">
            <nav>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={list}
                className="nav-list"
              >
                {MENU.map((item, i) => (
                  <motion.li custom={i} variants={nav} key={i}>
                    <a href={item.link}>{item.text}</a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </div>
        </header>
        <motion.section initial="hidden" whileInView="visible" className="hero">
          <div className="container">
            <motion.h1 variants={textAnimationRight}>Олеся и Алексей</motion.h1>
            <motion.h3 variants={textAnimationLeft}>19 июля 2024 г.</motion.h3>
          </div>
        </motion.section>
      </motion.section>
      <Timer expiryTimestamp={time} />
      <section className="about">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={textAnimationRight}
          >
            Олеся и Алексей
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textAnimationLeft}
          >
            Дорогие друзья!
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textAnimationRight}
          >
            Жить, любить, чувствовать. Однажды мы поняли, что нет ничего важнее
            этого. И что идти дальше мы хотим только вместе. А теперь мечтаем,
            чтобы день нашей свадьбы стал красивым и ярким событием на этом
            увлекательном пути.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textAnimationLeft}
          >
            Мы будем очень рады, если вы разделите этот счастливый день с нами.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textAnimationRight}
          >
            Увидимся на нашей свадьбе!
          </motion.p>
          <div className="about-photo">
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={textAnimationRight}
              src={ALEKSEY}
              alt="#"
              width={100}
            />
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={textAnimationLeft}
              src={OLESYA}
              alt="#"
              width={100}
            />
          </div>
        </div>
      </section>
      <LoveStory />
      <HappyDay />
      <Ceremony />
      <MapContainer />
      <Footer />
    </>
  );
};
