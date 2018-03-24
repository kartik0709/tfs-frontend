import React, { Component } from 'react';
import FinancialEducation from '../../assets/financialeducation.svg';
import TransferOfStocks from '../../assets/transferofstocks.svg';
import PortfolioGuidance from '../../assets/portfolioguidance.svg';
import IEPFStockRecovery from '../../assets/iepfstockrecovery.svg';
import Trading from '../../assets/trading.svg';
import MutualFunds from '../../assets/mutualfunds.svg';
import BondInvestment from '../../assets/bondinvestment.svg';
import DematerialisationAssistance from '../../assets/dematerialisationassistance.svg';

const DivClass = "k block-secondary af";
const InnerDivClass = "e ays";
const InnerDivClass2 = "c ahd yu";
const InnerDivClass3 = "fi ft gt";
const HeaderClass6 = "an axv agi";
const HeaderClass2 = "agw";
const BlockDivClass = "gd ail ahd";
const ImageClass = "agb";
const BlockWrapClass = "c ag";
const Content = [[{src: FinancialEducation, p: "Financial Education", alt: "financialeducation"},
                {src: TransferOfStocks, p: "Transfer of Stocks", alt: "transferofstocks"},
                {src: PortfolioGuidance, p: "Portfolio Guidance", alt: "portfolioguidance"},
                {src: IEPFStockRecovery, p: "IEPF Stock Recovery", alt: "stockrecovery"}],
                [{src: Trading, p: "Trading", alt: "trading"},
                {src: MutualFunds, p: "Mutual Funds", alt: "mutualfunds"},
                {src: BondInvestment, p: "Bond Investment", alt: "bondinvestment"},
                {src: DematerialisationAssistance, p: "Dematerialisation Assistance", alt: "dematerialisationassistance"}],];

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