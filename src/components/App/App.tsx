import { motion } from "framer-motion";

import { Header } from "../Header/Header";
import { Hero } from "../Hero";
import { Timer } from "../Timer";
import { About } from "../About";
import { LoveStory } from "../LoveStory";
import { HappyDay } from "../HappyDay";
import { Ceremony } from "../Ceremony";
import { MapContainer } from "../Map";
import { Footer } from "../Footer";

import { background } from "../../app/framer/config";

import "./App.css";

export const App = () => {
  const time = new Date("2024-07-19T18:00:00");
  time.getSeconds();
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={background}
        className="bg"
      >
        <Header />
        <Hero />
      </motion.section>
      <Timer expiryTimestamp={time} />
      <About />
      <LoveStory />
      <HappyDay />
      <Ceremony />
      <MapContainer />
      <Footer />
    </>
  );
};
