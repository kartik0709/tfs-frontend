import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const DivClass = "bsa bsb hidden";
const UlClass = "nav bpi nav-stacked yl";
const LiClass = "azb";
const LiClass2 = "m";
const LinkClass = "qm";
const List = ["Analysis", "Blog", "Contact", "Login"];

function NavList(props){
    return (
        <li className={LiClass2}>
            {(() => {
                switch (props.title){
                    case "Contact": return <HashLink className={LinkClass} to="/#form">{props.title}</HashLink>;
                    default: return <Link className={LinkClass} to={"/" + props.title.toLowerCase()}>{props.title}</Link>
                }
            })()}
        </li>
    )
}

class NavigationSmall extends Component{
    render() {
        return (
            <div className={DivClass} id="sidebar">
                <ul className={UlClass}>
                    <li className={LiClass}>Main</li>
                    {List.map((item) => <NavList key={item} title={item}/>)}
                </ul>
            </div>
        )
    }
}

export default NavigationSmall;