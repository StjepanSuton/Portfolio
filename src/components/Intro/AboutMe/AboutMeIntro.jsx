import { useEffect, useState } from "react";
import classes from "./AboutMeIntro.module.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMeIntro() {
  const [use, setUse] = useState(false);

  //Retrigera se 4 puta samo od sebe pa mi se animacija neće dogodit ako stavi triger
  //once true zato stavljen timeout od jedne sekunde kada se stranica učita
  const { ref, inView } = useInView({
    initialInView: false,
    threshold: 0.5,
    triggerOnce: use,
  });

  useEffect(() => {
    setTimeout(() => {
      setUse(true);
    }, 1000);
  }, []);

  return (
    <div ref={ref} className={classes.panel}>
      <div className={classes["panel-inner"]}>
        <motion.h1
          animate={{ y: inView ? -20 : 200, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={classes.title}
        >
          About me
        </motion.h1>

        <div className={classes.line}></div>
        <motion.div
          animate={{ y: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={classes.arrow}
        >
          <ArrowDownwardIcon
            sx={{ fontSize: 150, color: "rgb(245, 218, 190)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMeIntro;
