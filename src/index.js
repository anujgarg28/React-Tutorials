import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import Header from './Header.jsx'

ReactDOM.render(<React.Fragment>
        <Header/>
        <App/>
    </React.Fragment>, document.getElementById("root"));