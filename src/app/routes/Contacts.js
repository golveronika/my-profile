import React from 'react'
import HeroImage from './../components/HeroImage'
import Header from './../components/Header'
import Footer from '../components/Footer'

const Contacts = (props) => {

  return (
    <div className="main-container">
      <HeroImage history={props.history}/>
      <Header history={props.history} pageActive="contacts"/>

      <div className="contacts-page">
      Contacts
      </div>
      <Footer />
    </div>
  );
}

export default Contacts
