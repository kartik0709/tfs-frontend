import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";


class Index extends Component{
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
