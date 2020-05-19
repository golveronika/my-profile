import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import App from './app/App'
import About from './app/routes/About'
import Contacts from './app/routes/Contacts'
import Projects from './app/routes/Projects'
import NotFound_404 from './app/routes/NotFound_404'

import HeroImage from './app/components/HeroImage'

const Root = () => (
  <>
  <BrowserRouter>
      <HeroImage />
      <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/projects" component={Projects} />
      <Route path="*"  component={NotFound_404} />
    </AnimatedSwitch>
  </BrowserRouter>
  </>
)

ReactDOM.render(<Root />, document.getElementById('root'))