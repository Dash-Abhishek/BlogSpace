import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Home from './Home/Home'
// import Container from './Common/Container'
// import Header from './Header/Header'
// import Footer from './Footer/Footer';
import Root from './UI/Root';
import configureStore from './redux/configureStore';

function App() {
    return (<Root store={ configureStore() } />);
}

export default App;
