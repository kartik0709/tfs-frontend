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
const Loading = "fa fa-spinner fa-spin";

function LoadingIcon(){
    return (
        <div style={{fontSize: "30px", textAlign: "center"}}>
            <i className={Loading} />loading...
        </div>
    )
}

function Post(props){
    return(
        <div className={InnerDivClass}>
            <div className={InnerDivClass2}>
                <div className={InnerDivClass3}>
                    <header className={HeaderClass}>
                        <h1 className={H1Class}>{props.title}</h1>
                        <div className={MetaClass}>
                            <span>Written by <strong>Mannit Trehan</strong> on Thursday, February 15, 2018</span>
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

        this.state = {post: [], loading: true};
    }
    async componentDidMount(){
        let post = await axios.get('https://tfsolutions.herokuapp.com/api/blog/');
        post = post.data;
        this.setState({post: post, loading: false})
    }
    render(){
        return(
            <div className={DivClass}>
                <div style={{marginTop: "6em"}}>
                    {this.state.loading ? <LoadingIcon/> : this.state.post.map((item) => <Post key={item.id} {...item} />)}
                </div>
            </div>
        )
    }
}

export default BlogMain;
