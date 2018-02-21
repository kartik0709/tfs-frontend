import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../../css/blog-main.css';

const DivClass = "k am bqa bse";
const InnerDivClass = "post-main";
const InnerDivClass2 = "post";
const InnerDivClass3 = "post-content";
const HeaderClass = "entry-header";
const H1Class = "post-title";
const MetaClass = "post-meta";
const ContentClass = "post-body";
const ReadMore = "post-read-more";

function Post(props){
    return(
        <div className={InnerDivClass}>
            <div className={InnerDivClass2}>
                <div className={InnerDivClass3}>
                    <header className={HeaderClass}>
                        <h1 className={H1Class}>{props.title}</h1>
                        <div className={MetaClass}>
                            <span>Written by <strong>Kartik</strong> on Thursday, February 15, 2018</span>
                        </div>
                    </header>
                    <div className={ContentClass + " " + InnerDivClass3}>
                        <div>
                            {props.content}
                        </div>
                        <div className={ReadMore}>
                            <Link to={"/blog/"+props.id}>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

class BlogMain extends Component{
    constructor(props){
        super(props);

        this.state = {post: []};
        this.handleClick = this.handleClick.bind(this)
    }
    async componentDidMount(){
        let post = await axios.get('http://127.0.0.1:8000/api/blog/');
        post = post.data;
        this.setState({post})
    }
    handleClick(id){

    }
    render(){
        return(
            <div className={DivClass}>
                <div style={{marginTop: "6em"}}>
                    {this.state.post.map((item) => <Post key={item.id} {...item} onClick={this.handleClick}/>)}
                </div>
            </div>
        )
    }
}

export default BlogMain;