import React, { useState } from 'react';

import Login from '../containers/Login';
import Register from '../containers/Register';

export default () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    if(showRegisterForm) {
        return <Register toggleForm={ () => setShowRegisterForm(!showRegisterForm) } />
    } else {
        return <Login toggleForm={ () => setShowRegisterForm(!showRegisterForm) } />
    }
}

