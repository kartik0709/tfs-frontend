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
const Loading = "fa fa-spinner fa-spin";

function LoadingIcon(){
    return (
        <div style={{fontSize: "30px", textAlign: "center"}}>
            <i className={Loading} />loading...
        </div>
    )
}

function Post(props){
    return (
        <div className={InnerDivClass2}>
            <div className={InnerDivClass3}>
                <header className={HeaderClass}>
                    <h1 className={H1Class}>{props.content.title}</h1>
                    <div className={MetaClass}>
                        <span>Written by <strong>Kartik</strong> on {props.content.datetime}</span>
                    </div>
                </header>
                <div className={ContentClass + " " + InnerDivClass3}>
                    <div>
                        {props.content.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

class SinglePost extends Component{
    constructor(props){
        super(props);

        this.state = {post: {}, loading: true}
    }
    async componentDidMount(){
        let post = await axios.get('https://tfsolutions.herokuapp.com/api/blog/'+this.props.match.params.blogId);
        post = post.data;
        this.setState({post: post, loading: false})
    }
    render(){
        return(
            <div className={DivClass}>
                <div style={{marginTop: "6em"}}>
                    <Link to="/blog" className={IconClass}>  Back to Blog</Link>
                    <div className={InnerDivClass}>
                        {this.state.loading ? <LoadingIcon/> : <Post content={this.state.post}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePost;
