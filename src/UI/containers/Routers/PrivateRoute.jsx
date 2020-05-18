import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../../../redux/actions/auth';
import Loader from '../../ui/Popovers/Loader';

const PrivateRoute = ({
    component: Component,
    loading,
    isLoggedIn,
    authenticationFailed,
    authenticateUser,
    ...rest
}) => (
    <Route {...rest} render={(props) => {
        if(isLoggedIn) {
            return <Component {...props} />;
        } else if(loading || !authenticationFailed) {
            !authenticationFailed && authenticateUser();
            return <Loader open={ true } message="Authenticating..." />;
        } else {
            return <Redirect to='/' />;
        }
    }} />
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
)(PrivateRoute);
