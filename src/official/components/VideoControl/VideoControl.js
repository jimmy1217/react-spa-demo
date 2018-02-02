import React, { Component } from 'react';
import { mobileAndTabletcheck } from 'helpers';

class VideoControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: true,
      currentTime: Number(0).toFixed(2),
      muted: false
    }
  }
  isPlaying = (e) => {
    /**
     * 當作初始化時去判斷autoplay 是否被browser 阻擋 (safari)
     */
    this.setState({
      isPlay: !e.target.paused
    });
  }
  getTime = (e) => {
    this.duration = e.target.duration.toFixed(2);
  }
  timeChange = (e) => {
    if (!mobileAndTabletcheck()) {
      this.setState({
        currentTime: e.target.currentTime.toFixed(2)
      });
    }
  }
  controls = (e) => {
    if (e) { e.preventDefault(); }
    // 電腦版提供點擊video toggle play or pause
    if (!mobileAndTabletcheck()) {
      if (this.video.paused) {
        this.video.play();
      } else {
        this.video.pause();
      }
      this.setState({
        isPlay: !this.video.paused
      });
    }
  }
  toggleMuted = (e) => {
    if (e) { e.preventDefault(); }
    this.video.muted = !this.state.muted;
    this.setState({
      muted: !this.state.muted
    });
  }
  render() {
    const { img, src } = this.props;
    let count = this.state.currentTime / this.duration ? Number((this.state.currentTime / this.duration) * 100).toFixed(1) : 0;
    return (
      <div className="vedioWrap">
        <video
          ref={c => { this.video = c }}
          poster={img}
          playsinline
          autoPlay
          onClick={this.controls}
          loop={true}
          controls={mobileAndTabletcheck()}
          onTimeUpdate={this.timeChange}
          onLoadedMetadata={this.getTime}
          onPlaying={this.isPlaying} >
          <source src={src} type="video/mp4" />
        </video>
        <div className={classNames("controlbar", { hidden: mobileAndTabletcheck() })}>
          <div className="controlbar__info">
            <a href="#" className="text-grey" onClick={this.controls}>{this.state.isPlay ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>} </a>
            <span className="ml-10 b-2 text-grey">{this.state.currentTime}</span>
            <span className="ml-5 b-2 text-grey">/</span>
            <span className="ml-5 b-2 text-grey">{this.duration}</span>
          </div>
          <div className="controlbar__bar">
            <div className={classNames("progress ml-10 b-5", { stop: !this.state.isPlay })}>
              <div className="progress-inline" style={{
                transform: 'translate3d(' + count + '%,0,0)'
              }}></div>
            </div>
          </div>
          <div className="controlbar__volumn">
            <a href="#" onClick={this.toggleMuted}>
              <i className={classNames("fa", {
                "fa-volume-up text-green": !this.state.muted,
                "fa-volume-off text-grey": this.state.muted
              })}></i></a>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoControl;