import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="testimonials" id="profile">
      <div className="title white">
        <h2 className="titleText">My <span>P</span>rofile</h2>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgBx">
            <img src="/img/profile.jpg" alt="Profile" />
          </div>
          <div className="text">
            <p><strong>Name:</strong> Christian Gemina</p>
            <p><strong>Subject:</strong> Web Systems and Technologies </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
