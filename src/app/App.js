import React from 'react'
import HeroImage from './components/HeroImage'
import Header from './components/Header'

const App = (props) => {

  console.log(props)

  return (
    <div className="main-container">

    <HeroImage history={props.history}/>
    <Header history={props.history}/>

      <div className="hello-page">
        Hello Veronika!
      </div>
    </div>
  );
}

export default App
