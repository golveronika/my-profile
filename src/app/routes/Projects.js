import React from 'react'
import HeroImage from './../components/HeroImage'
import Header from './../components/Header'
import Footer from '../components/Footer'

const Projects = (props) => {

  return (
    <div className="main-container">

      <HeroImage history={props.history}/>
      <Header history={props.history} pageActive="projects"/>


      <div className="project-page">
        Projects
      </div>
      <Footer />
    </div>
  );
}

export default Projects
