import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Header, Nav, Footer } from 'components';
import throttle from 'lodash/throttle';

class Template extends Component {
  constructor(props) {
    super(props);
    // mobile Nav toggle & Header bg
    this.state = {
      menuVisible: false,
      bgDeep: true
    }
  }
  componentDidMount() {
    this.throttle = throttle(this.handleScroll, 150);
    window.addEventListener('scroll', this.throttle);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttle);
  }

  onHandleChange = (key, value) => (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      [key]: value
    });
  }
  handleScroll = (e) => {
    const window = e.target.defaultView;
    const bodyScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (!!(bodyScrollTop < 100) !== this.preSetBg) {
      this.preSetBg = !!(bodyScrollTop < 100)
      this.setState({
        bgDeep: !!(bodyScrollTop < 100)
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.scrollToTop();
    }
  }
  scrollToTop() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div id="TemplateContent">
        <Nav
          visible={this.state.menuVisible}
          activePage={this.props.location.pathname}
          onHandleChange={this.onHandleChange} />
        <Header
          activePage={this.props.location.pathname}
          bgDeep={this.state.bgDeep}
          isOpen={this.state.menuVisible}
          onHandleChange={this.onHandleChange} />
        <div id="mainContent" className={classNames({ menuOpen: this.state.menuVisible })}>
          <QueueAnim key='queueAnim' type="left" duration={300} interval={300}>
            {this.props.children}
            <Footer key="3" />
          </QueueAnim>
        </div>
      </div>
    );
  }
}

export default Template;