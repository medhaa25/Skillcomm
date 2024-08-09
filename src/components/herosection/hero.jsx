import "./hero.scss";
import Header from "../header/header";
const hero = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="header"> Local Skills for Local Needs</div>
        <div className="sub-heading">
          Connecting you with local experts for all your home and service
          requirements.
        </div>
        <button className="service">Book a Service Now</button>
      </section>
    </>
  );
};

export default hero;
