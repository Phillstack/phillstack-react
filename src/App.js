import React from 'react';
import Particles from 'react-particles-js';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component';
import ServicesPage from './pages/services/services.component';
import ProjectsPage from './pages/projects/projects.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const particlesOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

function App() {
  return (
    <div>
      <Particles className='particles'
        params={particlesOptions}
      />
      <Container fluid>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/services' component={ServicesPage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </Container>
    </div>
  );
}

export default App;