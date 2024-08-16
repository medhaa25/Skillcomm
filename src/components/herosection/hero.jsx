import "./hero.scss";
import Header from "../header/header";
import Footer from "../Footer/Footer";
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
      <section className="sub-section">
        <h2 className="text">Our Services</h2>
        <div className="content-grid">
          <div>Cleaning</div>
          <div>Painting</div>
          <div>Gardening</div>
          <div>Plumbing</div>
        </div>
        <div className="after-text">and many more..</div>
      </section>
      <section className="book-service-page">
        <h2>What Our Customers Say</h2>
        <blockquote>
          &quot;SkilComm made booking a service so easy! Highly recommend!&quot;
          - Alex J.
        </blockquote>
        <blockquote>
          &quot;SkilComm made booking a service so easy! Highly recommend!&quot;
          - Alex J.
        </blockquote>
        <blockquote>
          &quot;Professional and reliable. Will use again.&quot; - Jamie T.
        </blockquote>
        <button className="service-button">Book a Service Now</button>
      </section>
      <Footer />
    </>
  );
};

export default hero;
