import React, { useEffect, useState } from "react";
import classes from "./Welcome.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "@mui/material/useMediaQuery";
function Welcome() {
  const [use, setUse] = useState(false);
  const matches = useMediaQuery("(max-width:1024px)");
  //Retrigera se 4 puta samo od sebe na mountu pa mi se animacija neće dogodit ako stavi triger
  //once true zato stavljen timeout od jedne sekunde kada se stranica učita
  const { ref, inView } = useInView({
    initialInView: false,
    threshold: 0.4,
    triggerOnce: use,
  });

  useEffect(() => {
    setTimeout(() => {
      setUse(true);
    }, 1000);
  }, []);

  return (
    <div className={classes.panel} ref={ref}>
      <div className={classes["panel-inner"]}>
        <motion.h1
          animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={classes.title}
        >
          Projects
        </motion.h1>
        <div className={classes.line}></div>
        {matches === true ? (
          <motion.div
            animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={classes.arrow}
          >
            <ArrowDownwardIcon
              sx={{ fontSize: 100, color: "rgb(245, 218, 190)" }}
            />
          </motion.div>
        ) : (
          <motion.div
            animate={{ x: inView ? 50 : -300, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={classes.arrow}
          >
            <ArrowForwardIcon
              sx={{ fontSize: 150, color: "rgb(245, 218, 190)" }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
