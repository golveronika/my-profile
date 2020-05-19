import React from 'react'
import HeroImage from './components/HeroImage'
import Header from './components/Header'
import Footer from './components/Footer'

const App = (props) => {



  return (
    <div className="main-container">

    <HeroImage history={props.history}/>
    <Header history={props.history}/>

      <div className="hello-page">

        <div className="reach-text__left">
            <h4 className="reach-text__title">Hello</h4>
            <p className="reach-text__text">I will be happy to help you!</p>
        </div>

        <div className="reach-text__right">
            <h4 className="reach-text__title">How can I help you</h4>
            <p className="reach-text__text">
              Create responsive websites optimized for all devices and all browsers <br /> 
              Help with create clean and functional UI design <br />
              Development of functional SPA applications based on modern JS frameworks <br />
              Database development and data manipulation on the client side <br />
              Feel free to <a className="reach-text__link" href="#" onClick={() => props.history.push('/contacts')}>contact me</a> <br />
            </p>
        </div>

      </div>

      <Footer />
      
    </div>
  );
}

export default App
