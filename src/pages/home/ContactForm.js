import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-s-alert';
import '../../css/contact-main.css'
import '../../css/contact-util.css'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

const DivClass = "wrap-contact100";
const FormClass = "contact100-form validate-form";
const TitleSpanClass = "contact100-form-title";
const LabelSpanClass = "label-input100";
const InputClass = "input100";
const SpanFocusClass = "focus-input100";
const ContainerButtonClass = "container-contact100-form-btn";
const WrapButtonClass = "wrap-contact100-form-btn";
const ButtonDivClass = "contact100-form-bgbtn";
const ButtonClass = "contact100-form-btn";
const InfoClass = "contact100-more flex-col-c-m";
const FormFields = [{div: "wrap-input100 validate-input", validate: "Name is required", label: "Name", name: "name", type: "text", placeholder: "Name..."},
    {div: "wrap-input100 validate-input", validate: "Valid email is required: ex@abc.xyz", label: "Email", name: "email", type: "text", placeholder: "Email Address..."},
    {div: "wrap-input100", label: "Phone", name: "phone", type: "text", placeholder: "Phone Number..."},];

const InfoFields = [{id: "info_label", div: "flex-w size1 p-b-47", div1: "txt1 p-r-25", icon: "lnr lnr-map-marker", div2: "flex-col size2", span1: "txt1 p-b-20", span2: "txt2", info_label: "Address", info: "Sector-18, Chandigarh"},
                    {id: "info_phone", div: "dis-flex size1 p-b-47", div1: "txt1 p-r-25", icon: "lnr lnr-phone-handset", div2: "flex-col size2", span1: "txt1 p-b-20", span2: "txt3", info_label: "Lets Talk", info: "+91 98 88889224"},
                    {id: "info_email", div: "dis-flex size1 p-b-47", div1: "txt1 p-r-25", icon: "lnr lnr-envelope", div2: "flex-col size2", span1: "txt1 p-b-20", span2: "txt3", info_label: "Support", info: "mannit.leo08@gmail.com"}];

function InputField(props){
    if(props.alert === true && props.fields.indexOf(props.content.name) !== -1 && !props.content.div.includes("alert-validate")){
        props.content.div  = props.content.div + " alert-validate";
    } else if (props.fields.indexOf(props.content.name) === -1){
        props.content.div = props.content.div.replace("alert-validate","");
    }
    return (
        <div className={props.content.div} data-validate={props.content.validate}>
            <span className={LabelSpanClass}>{props.content.label}</span>
            <input className={InputClass} type={props.content.type} name={props.content.name} value={props.value} placeholder={props.content.placeholder} onChange={props.onChange} onFocus={props.onFocus}/>
            <span className={SpanFocusClass}></span>
        </div>
    )
}

function ContactInfo(props) {
    return (
        <div className={props.content.div}>
            <div className={props.content.div1}>
                <span className={props.content.icon}></span>
            </div>

            <div className={props.content.div2}>
                <span className={props.content.span1}>
                    {props.content.info_label}
                </span>

                <span className={props.content.span2}>
                    {props.content.info}
                </span>
            </div>
        </div>
    )
}

class ContactForm extends Component{
    constructor(props){
        super(props);

        let input_div_class = "wrap-input100 validate-input";
        this.state = {name: "", email: "", phone: "", message: "", alert: false, alert_fields: [], input_div_class: input_div_class};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkForm = this.checkForm.bind(this);
        this.fieldCheck = this.fieldCheck.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }
    fieldCheck(key, value){
        let fields = this.state.alert_fields;
        let index = fields.indexOf(key);
        if (value === "") {
            if (index === -1) {
                fields.push(key);
                this.setState({alert_fields: fields})
            }
            return false
        }
        return true
    }
    checkForm(){
        let check = true;
        if (this.fieldCheck("name",this.state.name) === false){
            this.setState({alert: true});
            check = false;
        }
        if (this.fieldCheck("email",this.state.email) === false){
            this.setState({alert: true});
            check = false;
        }
        if (this.fieldCheck("message",this.state.message) === false){
            if(!this.state.input_div_class.includes("alert-validate")){
                let input_class = this.state.input_div_class + " alert-validate";
                this.setState({input_div_class: input_class})
            }
            this.setState({alert: true});
            check = false;
        }
        if (check === false){
            return false
        }
        return true
    }
    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    onSubmit(event) {
        const self = this;
        event.preventDefault();
        if (this.checkForm() !== false) {
            axios.post('http://www.tfsolutions.herokuapp.com/api/contact/', {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message,
            }).then(function (response) {
                if (response.status === 200) {
                    self.setState({name: "", email: "", phone: "", message: ""});
                    Alert.success('<h3>Message Sent!</h3>', {
                        position: 'bottom-right',
                        effect: 'jelly',
                        timeout: 5000,
                        offset: 100
                    });
                }
            }).catch(function (error) {
                Alert.error('<h3>Error!</h3> ' + error.response.data, {
                    position: 'bottom-right',
                    effect: 'jelly',
                    timeout: 5000,
                    offset: 100
                });
            });
        }
    }
    onFocus(event){
        let fields = this.state.alert_fields;
        let index = fields.indexOf(event.target.name);
        if (index !== -1){
            fields.splice(index, 1);
            this.setState({alert_fields: fields})
        }
        if (event.target.name === "message"){
            this.setState({input_div_class: "wrap-input100 validate-input"})
        }
    }
    render(){
        return (
            <div className={DivClass}>
                <form id="form" className={FormClass}>
                    <span className={TitleSpanClass}>
                        Contact Us
                    </span>
                    {FormFields.map((item) => <InputField key={item.name} alert={this.state.alert} fields={this.state.alert_fields} content={item} value={this.state[item.name]} onChange={this.onChange} onFocus={this.onFocus}/>)}
                    <div className={this.state.input_div_class} data-validate = "Message is required">
                        <span className={LabelSpanClass}>Message</span>
                        <textarea className={InputClass} name="message" placeholder="Questions/Comments..." value={this.state.message} onChange={this.onChange} onFocus={this.onFocus}></textarea>
                        <span className={SpanFocusClass}></span>
                    </div>
                    <div className={ContainerButtonClass}>
                        <div className={WrapButtonClass}>
                            <div className={ButtonDivClass}></div>
                            <button className={ButtonClass} onClick={this.onSubmit}>
                                Send
                            </button>
                        </div>
                    </div>
                </form>
                <div className={InfoClass}>
                    {InfoFields.map((item) => <ContactInfo key={item.id} content={item}/>)}
                </div>
                <Alert stack={{limit: 3}} html={true} />
            </div>
        )
    }
}

export default ContactForm;