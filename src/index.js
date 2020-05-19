import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './app/App'
import About from './app/routes/About'
import Contacts from './app/routes/Contacts'
import Projects from './app/routes/Projects'
import NotFound_404 from './app/routes/NotFound_404'

/*

import MainArea from './app/react/components/MainArea';
import LogginForm from './app/react/components/Authorization';
import NotFound_404 from './app/react/components/404';
import View from './app/react/components/View';
import Edit from './app/react/components/Edit';
import New from './app/react/components/New';

<ProtectedRoute exact path="/" component={MainArea} />
<ProtectedRoute exact path="/view" component={View} />
<ProtectedRoute exact path="/edit" component={Edit} />
<ProtectedRoute exact path="/new" component={New} />
<Route exact path="/loggin" component={LogginForm} /> 
<Route path="*"  component={NotFound_404} />

*/

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/projects" component={Projects} />
      <Route path="*"  component={NotFound_404} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))