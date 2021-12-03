import React, { useEffect } from "react";
import classes from "./Madeby.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
function Madeby() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    var container = document.querySelector("#scroll-container");

    var height = container.clientHeight;
    document.body.style.height = height + "px";

    gsap.to(container, {
      y: -(height - document.documentElement.clientHeight),
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    document.querySelectorAll(".nav a").forEach((e) => {
      const target = e.getAttribute("href");
      const targetEl = document.querySelector(target);
      const targetRect = targetEl.getBoundingClientRect();

      e.addEventListener("click", (e) => {
        e.preventDefault();

        gsap.to(window, {
          scrollTo: targetRect.top,
          ease: "power4",
          onComplete: updateDocument,
          onCompleteParams: [targetRect.top],
        });
      });
    });
    // keep scrollbar position in sync
    const updateDocument = (offset) => {
      console.log(offset);
      //document.documentElement.scrollTop = document.body.scrollTop = offset;
    };
  }, []);

  return (
    <div id="scroll-container">
      <div className={classes.background}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        illum, nam neque veniam nulla numquam aspernatur explicabo ex fugit
        dolorum nostrum vitae non repellat. Commodi, maxime. Enim illum
        provident quas.
      </div>
      <div className={classes.background}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        illum, nam neque veniam nulla numquam aspernatur explicabo ex fugit
        dolorum nostrum vitae non repellat. Commodi, maxime. Enim illum
        provident quas.
      </div>
      <div className={classes.background}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        illum, nam neque veniam nulla numquam aspernatur explicabo ex fugit
        dolorum nostrum vitae non repellat. Commodi, maxime. Enim illum
        provident quas.
      </div>
    </div>
  );
}

export default Madeby;
