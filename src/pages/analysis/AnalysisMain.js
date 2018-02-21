import React, { Component } from 'react';
import ResearchBackground from '../../assets/research.jpg'
import '../../css/analysis.css'

const DivClass = "k am bqa bse";
const InnerDivClass = "ana-main";
const IconClass = "fa fa-arrow-left ana-bck";
const DataClass = "ana-data";
const Types = ["IPO Pick", "Short Term", "Mid Term", "Long Term"];

function AnalysisTypes(props) {
    let style = {};
    let ButtonClass;
    if (props.show.length === 4) {
        ButtonClass = "ana-btn";
    } else {
        ButtonClass = "ana-btn-clicked"
    }
    if (props.show.indexOf(props.name) !== -1){
        style.display = "block";

    } else {
        style.display = "none";
    }
    return(
        <button className={ButtonClass} style={style} onClick={()=>props.onClick(props.name)}>
            {props.name}
        </button>
    )
}

class AnalysisMain extends Component{
    constructor(props){
        super(props);

        this.state ={show_button: ["IPO Pick", "Short Term", "Mid Term", "Long Term"], back_display: "none", data_display: "none", margin: "6em"};
        this.hideClick = this.hideClick.bind(this);
        this.showClick = this.showClick.bind(this)
    }
    hideClick(name){
        let show_button = [name];
        this.setState({show_button: show_button, back_display: "block", data_display: "block", margin: "0em"})
    }
    showClick(){
        this.setState({show_button: Types, back_display: "none", data_display: "none", margin: "6em"})
    }
    render(){
        const Style = {
            backgroundImage: "url(" + ResearchBackground + ")"
        };
        const ArrowStyle = {
            marginBottom: "15px",
            display: this.state.back_display,
        };
        const DataStyle = {
          display: this.state.data_display,
        };
        return(
            <div className={DivClass} style={Style}>
                <div className={InnerDivClass} style={ArrowStyle}>
                    <button className={IconClass} style={{maxWidth: "100%"}} onClick={this.showClick}>Back to analysis</button>
                </div>
                <div className={InnerDivClass} style={{marginTop: this.state.margin}}>
                    {Types.map((item) => <AnalysisTypes key={item} name={item} show={this.state.show_button} onClick={this.hideClick}/>)}
                    <div className={DataClass} style={DataStyle}>
                        Analysis will be uploaded soon.
                    </div>
                </div>
            </div>
        )
    }
}

export default AnalysisMain;
