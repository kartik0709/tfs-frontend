import React, { Component } from 'react';
import Reliability from '../../assets/reliability.svg';
import Tools from '../../assets/tools.svg';
import Trade from '../../assets/trade.svg'
import Guidance from '../../assets/guidance.svg'
import Security from '../../assets/security.svg'
import Framework from '../../assets/framework.svg'

const DivClass = "k block-secondary af";
const InnerDivClass = "e ays";
const InnerDivClass2 = "c ahd yu";
const InnerDivClass3 = "fi ft gt";
const HeaderClass6 = "an axv agi";
const HeaderClass2 = "agw";
const BlockDivClass = "gd ail ahd";
const ImageClass = "agb";
const BlockWrapClass = "c ag";
const Content = [[{src: Reliability, p: "Investment in bonds", alt: "investment"},
                {src: Tools, p: "Sale purchase stocks", alt: "stocks"},
                {src: Trade, p: "Investment in mutual funds", alt: "mutual funds"}],
                [{src: Guidance, p: "Portfolio guidance", alt: "portfolio"},
                {src: Security, p: "Transfer of shares", alt: "transfer"},
                {src: Framework, p: "Physical to demat", alt: "framework"}],];

function BlockContent(props){
    const Style = {
        height: 170,
    };
    return (
        <div className={BlockDivClass}>
            <img className={ImageClass} src={props.content.src} style={Style} alt={props.content.alt}/>
            <p><strong>{props.content.p}</strong></p>
        </div>
    )
}

function BlockWrap(props) {
    return (
        <div className={BlockWrapClass}>
            {props.content.map((item) => <BlockContent key={item.alt} content={item}/>)}
        </div>
    )
}

class Section3 extends Component{
    render(){
        const Style = {
            backgroundColor: "#F4F5F6",
        };
        return(
            <div className={DivClass} style={Style}>
                <div className={InnerDivClass}>
                    <div className={InnerDivClass2}>
                        <div className={InnerDivClass3}>
                            <h6 className={HeaderClass6}>Services we provide</h6>
                            <h2 className={HeaderClass2}>It’s not hard to see how we make your life easier every day.</h2>
                        </div>
                    </div>
                    {Content.map((item, index) => <BlockWrap key={index} content={item}/>)}
                </div>
            </div>
        )
    }
}

export default Section3;