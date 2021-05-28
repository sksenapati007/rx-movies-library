import React, { Component } from 'react';

class Like extends Component {
    state = {}
    
    render() {
        let classes = "likeSymbol text-light fa fa-heart";
        if (!this.props.liked) classes += "-o"
        return (<span className="btn btn-info" onClick={this.props.onClick}><i className={classes}  /></span>);
    }
}

export default Like;