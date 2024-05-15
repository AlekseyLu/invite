import { motion } from "framer-motion";

import photo1 from "../../app/images/1.jpg";
import photo2 from "../../app/images/2.jpg";
import photo3 from "../../app/images/3.jpg";
import photo4 from "../../app/images/4.jpg";
import photo5 from "../../app/images/5.jpg";
import photo6 from "../../app/images/6.jpg";
import photo7 from "../../app/images/7.jpg";
import photo8 from "../../app/images/8.jpg";
import photo9 from "../../app/images/9.jpg";

import "./LoveStory.css";
import { useState } from "react";

const GALLERY = [
  {
    id: 10,
    photo: photo1,
  },
  {
    id: 11,
    photo: photo2,
  },
  {
    id: 12,
    photo: photo3,
  },
  {
    id: 13,
    photo: photo4,
  },
  {
    id: 14,
    photo: photo5,
  },
  {
    id: 15,
    photo: photo6,
  },
  {
    id: 16,
    photo: photo7,
  },
  {
    id: 17,
    photo: photo8,
  },
  {
    id: 18,
    photo: photo9,
  },
];

const list = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, x: 100 },
};

export const LoveStory = () => {
  const [count, setCount] = useState(3);
  const length = window.screen.width < 568 ? true : false;
  console.log(length);
  return (
    <section className="love-story">
      <div className="container">
        <h2 className="title">Love Story</h2>
        <motion.ul initial="hidden" animate="visible" className="photo-list">
          {GALLERY.map(({ id, photo }, index) => {
            if (index >= count && length) {
              return;
            }
            return (
              <motion.li variants={list} key={id} className="photo-item">
                <img src={photo} alt="#" />
              </motion.li>
            );
          })}
        </motion.ul>
        {count !== GALLERY.length && length && (
          <button onClick={() => setCount(GALLERY.length)} className="btn-more">
            Показать ещё
          </button>
        )}
      </div>
    </section>
  );
};
