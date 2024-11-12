// Home.js (same style for About.js and Contact.js)
import React from 'react';
// import redshift from './redshift.jpg'
// import coverd from './coverd.jpg'
import home from './home.png' 

function Home() {
  return (
    <div className="page">
      <img src={home} alt=""/>
      {/* <h2>Home Page</h2>
      <p>Welcome to the Home Page! Explore our features and more.</p> */}
    </div>
  );
}

export default Home;
