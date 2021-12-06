import classes from "./ContactMe.module.scss";
import fb from "../../Assets/SocialAssets/fb.png";
import instagram from "../../Assets/SocialAssets/instagram.png";
import github from "../../Assets/SocialAssets/github.png";
import linkedIn from "../../Assets/SocialAssets/LinkedIn.png";
function ContactMe() {
  return (
    <div>
      <div className={classes["extended-background"]}>
        <div className={classes.container}>
          <div className={classes["social-container"]}>
            <div>
              <img className={classes.img} src={fb} alt="facebook" />
              <img className={classes.img} src={instagram} alt="instagram" />
            </div>
            <div>
              <img className={classes.img} src={github} alt="github" />
              <img className={classes.img} src={linkedIn} alt="linkedin" />
            </div>
          </div>
          <div className={classes["about-contact"]}>
            <p className={classes.p}>
              Want to know more about me, have some questions about my skills in
              front-end development or electicall enginnering ,you can contact
              me on sutonstjepan@gmail.com or stjepan.suton@prolux.hr for
              elecrical enginnering questions. You can also checkout my github
              repo to see the source code for the projects metionend in the
              section before as well as some other projects not metinoned here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
