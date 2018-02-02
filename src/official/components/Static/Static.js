import React, { Component } from 'react';

class Static extends Component {
    shouldComponentUpdate(){
        return false;
      }
    render() {
        var child = this.props.children;
        if (child === null || child === false) {
            return null;
        }
        return child;
    }
}

export default Static;