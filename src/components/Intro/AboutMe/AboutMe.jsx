import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Portfolio from "../../../Assets/zaPortfolio.png";
import { useInView } from "react-intersection-observer";
import classes from "./AboutMe.module.scss";

function AboutMe() {
  const [use, setUse] = useState(false);

  //Retrigera se 4 puta samo od sebe pa mi se animacija neće dogodit ako stavi triger
  //once true zato stavljen timeout od jedne sekunde kada se stranica učita
  const { ref, inView } = useInView({
    delay: 10,
    initialInView: false,
    threshold: 0.35,
    triggerOnce: use,
  });

  useEffect(() => {
    setTimeout(() => {
      setUse(true);
    }, 1000);
  }, []);

  return (
    <div className={classes["extended-background"]} ref={ref}>
      <div className={classes["intro-background"]}>
        <div className={classes["small-container"]}>
          <motion.div
            animate={{ x: inView ? 0 : -1400 }}
            transition={{ duration: 1.5 }}
            className={classes.pbox}
          ></motion.div>
          <p className={classes.p}>
            Hello! My name is Stjepan Suton and I am an electrical engineer with
            a passion for front-end development. I graduated with a master's
            degree in electrical engineering in 2018 and have been working in
            the industry ever since. In early 2021 I took up front-end
            development as a hobby and am currently trying to get a foot in the
            industry. In my spare time I like to play board games like chess and
            Catan, train boxing, and play football with my friends.
          </p>
          <motion.img
            className={classes.img}
            src={Portfolio}
            alt="za portfolio"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
