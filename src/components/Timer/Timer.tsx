import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTimer } from "react-timer-hook";

import { itemsList, listContainer } from "../../app/framer/config";

import "./Timer.css";

type Props = {
  expiryTimestamp: Date;
};

export const Timer: FC<Props> = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  const [isMobile, setIsModile] = useState(
    window.screen.width < 568 ? false : true
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const declensionNum = (num: any, words: string[]) =>
    words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];

  const day = days < 10 ? "0" + days : days;
  const hour = hours < 10 ? "0" + hours : hours;
  const min = minutes < 10 ? "0" + minutes : minutes;
  const sec = seconds < 10 ? "0" + seconds : seconds;

  const dayTitle = declensionNum(day, ["день", "дня", "дней"]);
  const hourTitle = declensionNum(hour, ["час", "часа", "часов"]);
  const minTitle = declensionNum(min, ["минута", "минуты", "минут"]);
  const secTitle = declensionNum(sec, ["секунда", "секунды", "секунд"]);

  const handleResize = (width: number) =>
    width < 568 ? setIsModile(false) : setIsModile(true);

  useEffect(() => {
    window.addEventListener("resize", () => handleResize(window.screen.width));
    return () =>
      window.removeEventListener("resize", () =>
        handleResize(window.screen.width)
      );
  }, []);

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={listContainer}
      className="timer-container"
    >
      <>
        <motion.li custom={1} variants={itemsList} className="box">
          <div className="number">{day}</div>
          <div className="text">{dayTitle}</div>
        </motion.li>
        <motion.div className="line" custom={2} variants={itemsList} />
      </>
      <>
        <motion.li custom={3} variants={itemsList} className="box">
          <div className="number">{hour}</div>
          <div className="text">{hourTitle}</div>
        </motion.li>
        <motion.div className="line" custom={4} variants={itemsList} />
      </>
      <>
        <motion.li custom={5} variants={itemsList} className="box">
          <div className="number">{min}</div>
          <div className="text">{minTitle}</div>
        </motion.li>
        {isMobile && (
          <motion.div className="line" custom={6} variants={itemsList} />
        )}
      </>
      {isMobile && (
        <>
          <motion.li custom={7} variants={itemsList} className="box">
            <div className="number">{sec}</div>
            <div className="text">{secTitle}</div>
          </motion.li>
        </>
      )}
    </motion.ul>
  );
};
