import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="col50">
          <h2 className="titleText"><span>A</span>bout <span>M</span>e</h2>
          <p>Hello my name is CHRISTIAN JAN GEMINA. Also known as "Chan" or "CJ". I am 21 years old and I live in Poblacion, El Salvador City. I'm a sporty type of person rather but I love playing online games too.  I'm currently taking Midyear in USTP and an IT Student. Hoping to create more and do more.</p>
        </div>
        <div className="col50">
          <div className="imgBx">
            <img src="img/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
