import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home/Home'
import Container from './Styles/Container'
import Header from './Header/Header'
import Footer from './Footer/Footer';

function App() {
  return (

    
      <Container>

        <Router>
          <Header />
          <Route path="/" component={Home} />

        </Router>
        <Footer/>
      </Container>
    



  );
}

export default App;
