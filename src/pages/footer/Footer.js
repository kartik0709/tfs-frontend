import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const DivClass = "k am ak";
const InnerDivClass = "e";
const InnerDivClass2 = "c";
const UlClass = "ek ayn";
const LiClass = "agi";
const LiClass2 = "an";
const HeaderClass = "axv";
const LinkLists = [{link: false, div: "ge ahd", h:["About"], li:["We have years of experience offering expert financial solutions."]},
                   {link: true, div: "gb ajb ahd", h:["Analysis"], li:["IPO Pick", "Short Term", "Mid Term", "Long Term"]},
                   {link: true, div: "gb ahd", h:["Blog", "Login"], li:[]}];

function ListNormalItem(props){
    return (
        <li className={LiClass2}>
            {props.content}
        </li>
    )
}

function ListHeaderItem(props){
    return (
        <li className={LiClass}>
            {(() => {
                switch(props.link){
                    case true: return <Link to={"/" + props.content.toLowerCase()}><h6 className={HeaderClass}>{props.content}</h6></Link>;
                    case false: return <h6 className={HeaderClass}>{props.content}</h6>;
                    default: return <h6 className={HeaderClass}>{props.content}</h6>;
                }
            })()}
        </li>
    )
}

function UnorderedList(props){
    return (
        <div className={props.content.div}>
            <ul className={UlClass}>
                {props.content.h.map((item) => <ListHeaderItem key={"header-"+ item} link={props.link} content={item}/>)}
                {props.content.li.map((item) => <ListNormalItem key={"normal-" + item} link={props.link} content={item}/>)}
            </ul>
        </div>
    )
}

function FooterLink(props){
    return(
        <div className={InnerDivClass2}>
            {props.content.map((item) => <UnorderedList key={"Footer-"+item.h[0]} link={item.link} content={item}/>)}
        </div>
    )
}

class Footer extends Component{
    render(){
        const Style = {
            padding: "40px"
        };
        return (
            <div className={DivClass} style={Style}>
                <div className={InnerDivClass}>
                    <FooterLink content={LinkLists}/>
                </div>
            </div>
        )
    }
}

export default Footer;