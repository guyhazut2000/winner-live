// css
import "./Hero.css";
import HeroImage from "../../images/hero.jpg";

const Hero = () => {
  return (
    <div className="container-fluid p-0 m-0 ">
          <h3 className="container text-center text-alert my-2 ">Welcome to Hazut Bet</h3>
          <img
            className="d-none d-lg-block mx-auto my-auto img-fluid "
            src={HeroImage}
            alt=""
          />
    </div>
  );
};

export default Hero;
