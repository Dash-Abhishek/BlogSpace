import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import PrivateRoute from './containers/Routers/PrivateRoute';
import CommonRoute from './containers/Routers/CommonRoute';
import Header from './containers/Header';
import Footer from './ui/Footer/Footer';
import Home from './containers/Home';
import CreateBlog from './ui/CreateBlog';
// import Login from './ui/Login';
// import Register from './ui/Register';
import breakpoints from './ui/Styles/breakpoints';

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
        <Provider store={ store }>
            <ThemeProvider theme={ {breakpoints} }>
                <Container>
                    <Header />
                    <Body>
                        <Router>
                            <CommonRoute exact path="/" component={ Home } />
                            {/* <Route exact path="/login" component={ Login } />
                            <Route exact path="/register" component={ Register } /> */}
                            <PrivateRoute exact path="/createblog" component={ CreateBlog } />
                        </Router>
                    </Body>
                    <Footer />
                </Container>
            </ThemeProvider>
        </Provider>
    );
}

export default Root;
