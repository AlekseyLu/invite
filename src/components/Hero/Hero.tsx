import { motion } from "framer-motion";

import { textAnimationLeft, textAnimationRight } from "../../app/framer/config";

import "./Hero.css";

export const Hero = () => (
  <motion.section initial="hidden" whileInView="visible" className="hero">
    <div className="container">
      <motion.h1 variants={textAnimationRight}>Олеся и Алексей</motion.h1>
      <motion.h3 variants={textAnimationLeft}>19 июля 2024 г.</motion.h3>
    </div>
  </motion.section>
);
