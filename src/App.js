import React, { Component } from 'react';
import Navigation from './pages/navigation/Navigation';
import NavigationSmall from './pages/navigation/NavigationSmall'
import Main from './Main';
import Footer from './pages/footer/Footer'
import './js/toolkit'
import './css/application-startup.css';
import './css/toolkit-startup.css';

const DivClass = "brz";

class App extends Component {
    render() {
        return (
            <div>
                <NavigationSmall/>
                <div className={DivClass} id="stage">
                    <Navigation/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default App;
