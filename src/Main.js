import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AnalysisMain from './pages/analysis/AnalysisMain'
import BlogMain from './pages/blog/BlogMain'
import Redirect from 'react-router-dom/es/Redirect';
import SinglePost from './pages/blog/SinglePost'


class Main extends Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/analysis/" component={AnalysisMain}/>
                <Route exact path="/blog/" component={BlogMain}/>
                <Route path="/blog/:blogId" component={SinglePost}/>
                <Redirect from="*" to="/" />
            </Switch>
        )
    }
}

export default Main;