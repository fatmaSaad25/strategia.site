import React from 'react';
import { Link } from 'react-router-dom';
import StyleHome from '../Home//Home.module.css'
import styleFAQ from './FAQ.module.css'
const FAQ = () => {
  return (
    <div>
       <div className={`accordion ${StyleHome.heroAccordion} ${styleFAQ.difrBack}`} id="accordionExample">
              <div className={StyleHome.textAccordion}>
                <h4>Frequently Asked Questions</h4>
                <p className={styleFAQ.text}>Find answers to common questions about our marketing consultation services and packages.</p>
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
                 What is included in a marketing consultation?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                 Our marketing consultation includes a comprehensive analysis of your current marketing strategy, identification of growth opportunities, target audience analysis, competitor research, and a customized action plan with specific recommendations for your business. We also provide ongoing support and guidance to help you implement the strategies effectively.
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
                 How long does a typical consultation session last?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${StyleHome.accordBorder}`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                <p>A standard consultation session lasts 60-90 minutes, depending on the complexity of your business needs. For premium packages, we offer extended sessions and follow-up meetings to ensure comprehensive coverage of your marketing strategy.</p>
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
                  Can I customize a package to fit my specific needs?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Absolutely! While we offer three standard packages, we understand that every business is unique. We can create custom packages that combine elements from different tiers or add specialized services based on your specific requirements and budget.</p>
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
                  What types of businesses do you work with?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>We work with businesses of all sizes, from startups to established enterprises, across various industries including e-commerce, professional services, healthcare, technology, retail, and more. Our strategies are tailored to each industry's specific challenges and opportunities.</p>
                </div>
              </div>
            </div>
                          {/* Accordion Item #4 */}
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
                  How quickly can I expect to see results?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Results vary depending on your current situation and the strategies implemented. Typically, you'll start seeing initial improvements within 2-4 weeks for social media and content strategies, while SEO and brand awareness campaigns may take 2-3 months to show significant results.</p>
                </div>
              </div>
            </div>
                          {/* Accordion Item #5 */}
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
                 Do you provide ongoing support after the consultation?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Yes! All our packages include follow-up support. Basic packages include email support for 30 days, Standard packages include 60 days of support plus one follow-up call, and Premium packages include 90 days of comprehensive support with monthly check-ins.</p>
                </div>
              </div>
            </div>
                          {/* Accordion Item #6 */}
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
                  What if I'm not satisfied with the consultation?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with your consultation, we'll work with you to address any concerns or provide a full refund within 14 days of your session.</p>
                </div>
              </div>
            </div>
                          {/* Accordion Item #7 */}
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
                  Can you help with implementation of the marketing strategy?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Yes! Beyond consultation, we offer implementation services including content creation, social media management, ad campaign setup, and ongoing marketing support. We can discuss these additional services during your consultation based on your needs and budget.</p>
                </div>
              </div>
            </div>
          </div>
          <section className={styleFAQ.question}>
               <h3>Still Have Questions?</h3>
                  <p>Can't find the answer you're looking for? Our team is here to help you with any questions about our marketing consultation services.</p>
                      <Link to="/FromContact">
                    <button className={styleFAQ.btn1}>Book a Consultation</button>
                  </Link>
                    <Link to="/FromContact">
                    <button className={styleFAQ.btn2}>Contact Us</button>
                  </Link>
          </section>
    </div>
  );
}

export default FAQ;
