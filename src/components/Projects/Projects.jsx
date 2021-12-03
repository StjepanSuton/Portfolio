import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Projects.scss";
import Welcome from "./Welcome/Welcome";
import Konobarco from "./Konobarco/Konobarco";
import SpaceTourism from "./SpaceTourism/SpaceTourism";
import GetInTouch from "./GetInTouch/GetInTouch";
function Projects() {
  const ref = useRef(null);

  //Horizontal scroll implememntacija
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(ref.current.children);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "linear",
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        scrub: 0.8, //kolko vrimena da se pina od jedne do druge
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=4000", //kolko je dugo scroll šta veći broj više ima za scrollat
      },
    });
  }, []);

  return (
    <div className="container" ref={ref}>
      <Welcome />
      <Konobarco />
      <SpaceTourism />
      <GetInTouch />
    </div>
  );
}

export default Projects;
