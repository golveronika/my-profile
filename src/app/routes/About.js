import React from 'react'
import HeroImage from './../components/HeroImage'
import Header from './../components/Header'
import Footer from '../components/Footer'

const About = (props) => {

  return (
    <div className="main-container">
      <HeroImage history={props.history}/>
      <Header history={props.history} pageActive="about"/>

      <div className="about-page">
        About
      </div>


      <Footer />

    </div>
  );
}

export default About
