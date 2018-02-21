import React, { Component } from 'react';
import axios from "axios/index";
import '../../css/blog-main.css';
import {Link} from "react-router-dom";

const DivClass = "k am bqa bse";
const InnerDivClass = "post-main";
const InnerDivClass2 = "post";
const InnerDivClass3 = "post-content";
const HeaderClass = "entry-header";
const H1Class = "post-title";
const MetaClass = "post-meta";
const ContentClass = "post-body";
const IconClass = "fa fa-arrow-left bckblog";

class SinglePost extends Component{
    constructor(props){
        super(props);

        this.state = {post: {}}
    }
    async componentDidMount(){
        let post = await axios.get('http://127.0.0.1:8000/api/blog/'+this.props.match.params.blogId);
        post = post.data;
        this.setState({post}, console.log(post.datetime))
    }
    render(){
        return(
            <div className={DivClass}>
                <div style={{marginTop: "6em"}}>
                    <Link to="/blog" className={IconClass}>  Back to Blog</Link>
                    <div className={InnerDivClass}>
                        <div className={InnerDivClass2}>
                            <div className={InnerDivClass3}>
                                <header className={HeaderClass}>
                                    <h1 className={H1Class}>{this.state.post.title}</h1>
                                    <div className={MetaClass}>
                                        <span>Written by <strong>Kartik</strong> on {this.state.post.datetime}</span>
                                    </div>
                                </header>
                                <div className={ContentClass + " " + InnerDivClass3}>
                                    <div>
                                        {this.state.post.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePost;