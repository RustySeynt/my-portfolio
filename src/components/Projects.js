import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="menu" id="project">
      <div className="title">
        <h2 className="titleText">My <span>P</span>rojects</h2>
      </div>
      <div className="content">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div className="box" key={num}>
            <div className="imgBx">
              <a href={`img/logo${num}.jpg`}><img src={`img/logo${num}.jpg`} alt={`Project ${num}`} /></a>
            </div>
          </div>
        ))}
      </div>
      <div className="title">
        <a href="#" className="btn">View All</a>
      </div>
    </section>
  );
}

export default Projects;
