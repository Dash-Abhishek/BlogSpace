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
    width: fit-content;
    min-height: calc(100vh - 210px);
`;

const Root = ({ store }) => {
    return (
        <Provider store={ store }>
            <Container>
                <Header />
                <Body>
                    <Router>
                        <Route exact path="/" component={ Home } />
                    </Router>
                </Body>
                <Footer />
            </Container>
        </Provider>
    );
}

export default Root;
