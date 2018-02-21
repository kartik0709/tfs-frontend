import React, { Component } from 'react';
import PriceMAG from '../../assets/price_mag.png'

const DivClass = "k block-secondary aa";
const InnerDivClass = "e";
const InnerDivClass2 = "c aq";
const InnerDivClass3 = "fq d-none wx";
const InnerDivClass4 = "gf fx ajb";
const InnerDivClass5 = "c d-none xb";
const ImageClass = "bsh";
const HeaderClass = "an axv";
const ParaClass = "al agw";
// eslint-disable-next-line
const ContentData = [{div: "fr agp", h5: "Data frequency", p: "We poll for data on a millisecond basis. You can react to\
                    new information in seconds rather than days."},
// eslint-disable-next-line
                    {div: "fr", h5: "Reliability &amp; uptime", p: "We process our data across a massively distributed\
                    network of reliable servers to ensure 99.99% uptime, always."}];


function Content(props){
    return (
        <div className={props.content.div}>
            <h5>{props.content.h5}</h5>
            <p>{props.content.p}</p>
        </div>
    )
}

class Section2 extends Component{
    render() {
        const Style = {
            width: "100%",
        };
        return (
            <div className={DivClass}>
                <div className={InnerDivClass}>
                    <div className={InnerDivClass2}>
                        <div className={InnerDivClass3}>
                            <img className={ImageClass} src={PriceMAG} style={Style} alt="price mag" />
                        </div>
                        <div className={InnerDivClass4}>
                            <h6 className={HeaderClass}>Rich Information</h6>
                            <h2>Make informed decisions with historical &amp; real time data.</h2>
                            <p className={ParaClass}>
                                We combine immediate real time events with rich historical data to help answer
                                the toughest questions about retention, growth, and engagement.
                            </p>
                            <div className={InnerDivClass5}>
                                {ContentData.map((item) => <Content key={item.h5} content={item}/> )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section2;