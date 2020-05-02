import React from 'react';
import Root from './UI/Root';
import configureStore from './redux/configureStore';

function App() {
    return (<Root store={ configureStore() } />);
}

export default App;
