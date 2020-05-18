import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { authenticate } from '../../../redux/actions/auth';
import Loader from '../../ui/Popovers/Loader';

const CommonRoute = ({
    component: Component,
    loading,
    isLoggedIn,
    authenticationFailed,
    authenticateUser,
    ...rest
}) => (
    <Route {...rest} render={(props) => {
        if(!authenticationFailed && !isLoggedIn && !loading) {
            authenticateUser();
        }
        return (
        <>
            {
                <Loader open={ loading } message="Authenticating..." />
            }
            <Component {...props} />
        </>
    )}} />
);

const mapStateToProps = ({ auth }, props) => ({
    loading: auth.loading,
    isLoggedIn: auth.isLoggedIn,
    authenticationFailed: auth.authenticationFailed,
    ...props
});

const mapActionsToProps = ({
    authenticateUser: authenticate
});

export default connect(
    mapStateToProps,
    mapActionsToProps
)(CommonRoute);