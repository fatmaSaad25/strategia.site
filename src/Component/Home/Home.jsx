import React from 'react';
import { Link } from 'react-router-dom';
import StyleHome from './Home.module.css'
const testimonials = [
  {
    id: 1,
    name: "Sara A.",
    role: "Business Owner",
    text: "Strategia helped us grow fast.",
    initials: "SA",
  },
  {
    id: 2,
    name: "Omar M.",
    role: "Startup Founder",
    text: "Clear plans and great results.",
    initials: "OM",
  },
  {
    id: 3,
    name: "Lina K.",
    role: "Retail Manager",
    text: "Perfect for small businesses.",
    initials: "LK",
  },
];
const Home = () => {
  return (
    <div>
      <div className={StyleHome.heroSection}>
        <div className={StyleHome.section}>
          <div className={StyleHome.textHeroSEction}>
          <h1>Book a Marketing <br/> Consultation to Grow Your<br/> Business</h1>
          <p>Fast, simple, and professional online marketing solutions.</p>
        </div>
        <div className={StyleHome.btnHeroSEction}>
          <Link className={StyleHome.btnHero} to="/FromContact">Book Now</Link>
          <Link className={StyleHome.btnHero} id={StyleHome.hero2} to="/packages">View Packages</Link>
        </div>
        </div>
      </div>
      <section className={StyleHome.features}>
       <div className="container">
         <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={StyleHome.icons}>
              <span> <i className="fa-solid fa-award text-2xl text-blue-600"></i></span>
            </div>
            <div className={StyleHome.textFeatures}>
              <h4>Certified Experts</h4>
              <p>Professional marketing specialists</p>
            </div>
          </div>
           <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={StyleHome.icons}>
              <span> <i className="fa-solid fa-briefcase text-2xl text-blue-600"></i></span>
            </div>
            <div className={StyleHome.textFeatures}>
              <h4>100+ Projects</h4>
              <p>Successfully completed campaigns</p>
            </div>
          </div>
           <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={StyleHome.icons}>
              <span><i class="fa-regular fa-star text-2xl text-blue-600"></i></span>
            </div>
            <div className={StyleHome.textFeatures}>
              <h4>5-Star Reviews</h4>
              <p>Trusted by our clients</p>
            </div>
          </div>
           <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={StyleHome.icons}>
              <span><i class="fa-solid fa-shield text-2xl text-blue-600"></i></span>
            </div>
            <div className={StyleHome.textFeatures}>
              <h4>Secure Booking</h4>
              <p>Safe and protected process</p>
            </div>
          </div>
        </div>
       </div>
      </section>
    <section className={StyleHome.testimonials}>
      <h2 className={StyleHome.title}>What Our Clients Say</h2>
      <p className={StyleHome.subtitle}>
        Real feedback from businesses we've helped grow
      </p>

      <div className={StyleHome.cards}>
        {testimonials.map((item,index) => (
          <div className={StyleHome.card} key={index}>
            <div className={StyleHome.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className={StyleHome.quote}>"{item.text}"</p>

            <div className={StyleHome.profile}>
              <div className={StyleHome.avatar}>{item.initials}</div>
              <div className={StyleHome.info}>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className={`accordion ${StyleHome.heroAccordion}`} id="accordionExample">
        <div className={StyleHome.textAccordion}>
          <h4>Frequently Asked Questions</h4>
          <p>Everything you need to know about our services</p>
        </div>
      {/* Accordion Item #1 */}
      <div className={`accordion-item ${StyleHome.accordion1}`}>
        <h2 className="accordion-header" id="headingOne">
          <button
            className={`accordion-button ${StyleHome.primarytext}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
           What's included in the consultation?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
           A full marketing review with practical steps.
          </div>
        </div>
      </div>

      {/* Accordion Item #2 */}
      <div className={`accordion-item ${StyleHome.accordion1}`}>
        <h2 className={`accordion-header`} id="headingTwo">
          <button
            className={`accordion-button collapsed ${StyleHome.primarytext}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Can I customize my package?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={`accordion-collapse collapse ${StyleHome.accordBorder}`}
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          <p>Yes, we offer flexible packages that can be tailored to your specific business needs and budget.</p>
          </div>
        </div>
      </div>

      {/* Accordion Item #3 */}
      <div className={`accordion-item ${StyleHome.accordion1}`}>
        <h2 className="accordion-header" id="headingThree">
          <button
            className={`accordion-button collapsed ${StyleHome.primarytext}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            How long does it take?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>Most projects are completed within 2-4 weeks, depending on the package and complexity of your requirements.</p>
          </div>
        </div>
      </div>
           {/* Accordion Item #3 */}
      <div className={`accordion-item ${StyleHome.accordion1}`}>
        <h2 className="accordion-header" id="headingThree">
          <button
            className={`accordion-button collapsed ${StyleHome.primarytext}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Do you offer support?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>Yes, we provide ongoing support and guidance to ensure your marketing strategy continues to deliver results.</p>
          </div>
        </div>
      </div>
    </div>
    <section className={StyleHome.growBusiness}>
      <h3>Ready to Grow Your Business?</h3>
      <p>Join hundreds of businesses that have transformed their marketing with our<br/> expert consultation services.</p>
          <Link to="/FromContact">
        <button>Get Started Today</button>
      </Link>
    </section>

    </div>
  );
}
export default Home;