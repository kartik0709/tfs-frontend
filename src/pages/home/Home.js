import React, { Component } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import ContactForm from './ContactForm'

const DivClass = "brz";

class Home extends Component{
    render(){
        return (
            <div className={DivClass}>
                <Section1/>
                <Section2/>
                <Section3/>
                <ContactForm/>
            </div>

        )
    }
}

export default Home;