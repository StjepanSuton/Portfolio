import classes from "./ContactMe.module.scss";
import React, { useState, useEffect } from "react";
import fb from "../../Assets/SocialAssets/fb.png";
import instagram from "../../Assets/SocialAssets/instagram.png";
import github from "../../Assets/SocialAssets/github.png";
import linkedIn from "../../Assets/SocialAssets/LinkedIn.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function ContactMe() {
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
    <div>
      <div className={classes["extended-background"]} ref={ref}>
        <div className={classes.container}>
          <div className={classes["social-container"]}>
            <motion.div
              animate={{ x: inView ? 0 : -1400 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <a
                href="https://web.facebook.com/trinaestiapostol.suton"
                rel="noopener noreferrer"
                target="_blank"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  className={classes.img}
                  src={fb}
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/occhi_e_capelli_marroni/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  className={classes.img}
                  src={instagram}
                  alt="instagram"
                />
              </a>
            </motion.div>
            <motion.div
              animate={{ x: inView ? 0 : -1400 }}
              transition={{ duration: 1.5, delay: 2 }}
            >
              <a
                href="https://github.com/zgodni"
                rel="noopener noreferrer"
                target="_blank"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  className={classes.img}
                  src={github}
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/stjepan-suton-7a6515136/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  className={classes.img}
                  src={linkedIn}
                  alt="linkedin"
                />
              </a>
            </motion.div>
          </div>
          <motion.div
            animate={{ x: inView ? 0 : -1400 }}
            transition={{ duration: 1.5 }}
            className={classes["about-contact"]}
          ></motion.div>
          <p className={classes.p}>
            Want to know more about me, maybe have some questions about my
            skills in front-end development or electrical engineering? You can
            contact me on sutonstjepan@gmail.com or stjepan.suton@prolux.hr for
            electrical engineering questions. You can also check out my GitHub
            repo to see the source code for the projects mentioned in the
            section before, as well as some other projects that are not
            mentioned here.
          </p>
        </div>
      </div>
      <h6 className={classes.h6}>Made by Stjepan Suton in Split,Croatia</h6>
    </div>
  );
}

export default ContactMe;
