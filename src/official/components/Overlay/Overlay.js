import React, { Component } from 'react';

const addClass = (el, className) => {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
}

const removeClass = (el, className) => {
    if (el.classList)
        el.classList.remove(className);
    else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

class Overlay extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.overlay = document.createElement("div");
        addClass(this.overlay,'overlay');
        document.body.appendChild(this.overlay);
        this._renderLayer();
    }
    componentDidUpdate(prevProps, prevState) {
        this._renderLayer();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            addClass(this.overlay,'visible');
        } else {
            removeClass(this.overlay,'visible');
        }
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.overlay);
        document.body.removeChild(this.overlay);
    }
    _renderLayer() {
        ReactDOM.render(this.props.children, this.overlay);
    }
    render() {
        // 當下render 一個空的 , 主要透過_renderLayer 直接丟到body 最外層
        return null;
    }
}

export default Overlay;