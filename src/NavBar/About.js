// Home.js (same style for About.js and Contact.js)
import React from 'react';
import about from './about.png'

function About() {
  return (
    <div className="page">
      <img src={about} alt="" />
    </div>
  );
}

export default About;
