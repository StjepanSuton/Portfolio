import AboutMe from "./Intro/AboutMe/AboutMe";
import Intro from "./Intro/IntroPage/Intro";
import AboutMeIntro from "./Intro/AboutMe/AboutMeIntro";
function Home() {
  return (
    <div>
      <Intro />
      <AboutMeIntro />
      <AboutMe />
    </div>
  );
}

export default Home;
