import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from './containers/Header';
import Home from './containers/Home';
import Footer from './ui/Footer/Footer';
import { Provider } from 'react-redux';

const Container = styled.div`
    width: 100%;
`;

const Body = styled.section`
    padding-top: 1em;
    padding-bottom: 1em;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    min-height: calc(100vh - 210px);
    background: linear-gradient(to top, #dfe9f3 50%, white 100%);  
`;

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Container>
                <Router>
                    <Header />
                    <Body>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/moto" component={Home} />
                        <Route exact path="/lifestyle" component={Home} />
                        <Route exact path="/tech" component={Home} />
                        <Route exact path="/legal" component={Home} />
                        <Route exact path="/social" component={Home} />
                    </Body>
                </Router>
                <Footer />
            </Container>
        </Provider>
    );
}

export default Root;
