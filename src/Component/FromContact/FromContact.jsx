import React from 'react';
import Swal from "sweetalert2";
import styleForm from './FromContact.module.css'
const FromContact = () => {
      const handleSubmit = (e) => {
    e.preventDefault();

Swal.fire({
  title: "Message Sent",
  text: "Thanks for your submission we will contact you soon 🎉",
  iconHtml: '<i class="fa fa-check"></i>',
  
  customClass: {
    icon: 'custom-success-icon'
  },
  confirmButtonColor: "#2563EB",
  confirmButtonText: "OK",
  backdrop: true,
  timer: 3000,
  timerProgressBar: true,
});
  };
    return (
        <div>
        <section className={styleForm.contact}>
          <div className={styleForm.textForm}>
              <h3>Book Your Consultation</h3>
            <p>Fill out the form below to schedule your marketing consultation or package.</p>
          </div>
           <div className={styleForm.form}>
             <form className={styleForm.formContainer} onSubmit={handleSubmit}>
      <div className={styleForm.formGroup}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          className={styleForm.inputField}
        />
      </div>

      <div className={styleForm.formGroup}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className={styleForm.inputField}
        />
      </div>
         <div className={styleForm.formGroup}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type='number'
          id="phone"
          placeholder="Enter your phone number"
          className={styleForm.inputField}
        />
      </div>
      <label htmlFor="Project Type">Project Type *</label>
      <select name="projectType" id='Project Type' >
        <option value="Select project type">Select project type</option>
        <option value="Brand Identity<">Brand Identity</option>
        <option value="Social Media Marketing">Social Media Marketing</option>
        <option value="Content Creation">Content Creation</option>
        <option value="Digital Advertising">Digital Advertising</option>
        <option value="Website Design">Website Design</option>
        <option value="Marketing Strategy">Marketing Strategy</option>
        <option value="Other">Other</option>
      </select>
      <label htmlFor="Package Selection">Package Selection</label>
      <select name="Package Selection" id="Package Selection">
        <option value="Select a package">Select a package</option>
        <option value="Basic - $250">Basic - $250</option>
        <option value="Standard - $450">Standard - $450</option>
        <option value="Premium - $750">Premium - $750</option>
        <option value="Custom Package">Custom Package</option>
        <option value="Consultation Only">Consultation Only</option>
      </select>
      <button type="submit" className={styleForm.btnSubmit}>
        Confirm
      </button>
    </form>
           </div>
        </section>
        <div className={styleForm.happensNext}>
            <h4>What Happens Next?</h4>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6npm install sweetalert2">
                        <div className={styleForm.card1}>
                            <span>1</span>
                            <p>We'll review your request within 24 hours</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6npm install sweetalert2">
                        <div className={styleForm.card1}>
                            <span>2</span>
                            <p>Schedule a consultation call at your convenience</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6npm install sweetalert2">
                        <div className={styleForm.card1}>
                            <span>3</span>
                            <p>Begin your marketing transformation journey</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default FromContact;
