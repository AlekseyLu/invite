import { useState } from "react";
import { motion } from "framer-motion";

import { listContainer } from "../../app/framer/config";

import { GALLERY } from "./data/constants";

import "./LoveStory.css";

export const LoveStory = () => {
  const [count, setCount] = useState(3);
  const length = window.screen.width < 568 ? true : false;

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
              <motion.li
                variants={listContainer}
                key={id}
                className="photo-item"
              >
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
