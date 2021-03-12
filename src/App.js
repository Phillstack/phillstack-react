import React from 'react';
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

function App() {
  return (
    <div className='container'>
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