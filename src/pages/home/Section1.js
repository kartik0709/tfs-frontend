import React, { Component } from 'react'
import Background from '../../assets/forex.jpg'
import StartupSVG from '../../assets/startup-0.svg'

const ImageClass = "z";
const DivClass = "k am bqa bse";
const InnerDivClass = "bqg ait";
const InnerDivClass2 = "e";
const InnerDivClass3 = "c";
const InnerDivClass4 = "fv gt";
const HeaderClass = "bsf bsg";
const ParaClass = "al agw an";
const ButtonClass = "dm ox ap";


class Section1 extends Component{
    render() {
        const Style = {
            backgroundImage: "url(" + Background + ")",
        };
        return (
            <div className={DivClass} style={Style}>
                <img className={ImageClass} src={StartupSVG} alt="startup"/>
                <div className={InnerDivClass}>
                    <div className={InnerDivClass2}>
                        <div className={InnerDivClass3}>
                            <div className={InnerDivClass4}>
                                <h1 className={HeaderClass}>Forex on demand.</h1>
                                <p className={ParaClass}>Solution to all financial worries.</p>
                                <a href="#form"><button className={ButtonClass}>Contact Us Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section1;