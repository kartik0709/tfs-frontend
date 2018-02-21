import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const DivClass = "e aij aey app-navbar";
const InnerDivClass = "d-none wx axv";
const NavClass = "du bqq azg qz";
const HomeLinkClass = "l aiy";
const UlClass = "navbar-nav";
const LiClass = "m ahq";
const LinkClass = "qm";
const ButtonClass = "qv";
const SpanClass = "fa fa-bars";
const NavLinks = ["analysis", "blog", "contact", "login"];

function Links(props){
    return (
        <li className={LiClass}>
            {(() => {
                switch (props.title){
                    case "contact": return <HashLink className={LinkClass} to="/#form">{props.title}</HashLink>;
                    default: return <Link className={LinkClass} to={"/" + props.title}>{props.title}</Link>
                }
            })()}
        </li>
    )
}

function Button(){
    return (
        <button className={ButtonClass} type="button" data-target="#stage" data-toggle="stage" data-distance="-250">
            <span className={SpanClass} style={{color: "white", fontSize: "24px"}}></span>
        </button>
    )
}


class Navigation extends Component{
    render() {
        const Style = {
            background: "#fff",
            padding: 12,
            borderRadius: 4,
            color: "#28669F"
        };
        return (
            <div className={DivClass}>
                <nav className={NavClass}>
                    <Link className={HomeLinkClass} to="/" >
                        <strong style={Style}>TFS</strong>
                    </Link>
                    <Button/>
                    <div className={InnerDivClass}>
                        <ul className={UlClass}>
                            {NavLinks.map((item, index) => <Links key={index} title={item}/>)}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default  Navigation;

