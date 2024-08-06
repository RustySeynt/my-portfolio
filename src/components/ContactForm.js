import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <form action="" method="">
      <section className="form" id="form">
        <div className="contactForm">
          <h3>Contact Me</h3>
          <div className="inputBox">
            <input type="text" name="firstname" placeholder="First Name" />
          </div>
          <div className="inputBox">
            <input type="text" name="middlename" placeholder="Middle Name" />
          </div>
          <div className="inputBox">
            <input type="text" name="lastname" placeholder="Last Name" />
          </div>
          <div className="inputBox">
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          </div>
          <div className="inputBox">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </section>
    </form>
  );
}

export default ContactForm;
