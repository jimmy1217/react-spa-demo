import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

// img url-loader
import systemPic from 'assets/system-pic.png';
import msg from 'assets/msg.png';
import systemIcon1 from 'assets/system-icon1.png';
import uieasy from 'assets/system-uieasy.png';
import systemRooms from 'assets/system-rooms.png';
import systemAnalisis from 'assets/system-analisis.png';
import systemHome from 'assets/system-home.png';
import systemEnergy from 'assets/system-energy.png';
import systemSafe from 'assets/system-safe.png';
import infoCountry from 'assets/infoCountry.png';
import systemCar from 'assets/system-car.png';

class PageFeature extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <div id="pageService">
        <div className="container defaultpd topDefaultHeight">
          <div className="row">
            <QueueAnim key='serviceContent1' type="left" duration={900} interval={100} delay={300}>
              <div key="0" className="tz0 col-xs-12 col-sm-6">
                <div className="inline-block pic mobileCenterPic" >
                  <img src={systemPic} alt="" style={{ maxWidth: '250px' }} />
                </div>
              </div>
            </QueueAnim>
            <QueueAnim key='serviceContent2' type="right" duration={900} interval={100} delay={300}>
              <div key="0" className="tz0 col-xs-12 col-sm-6 pt-30 mobileCenterText">
                <div className="inline-block">
                  <div className="inline-block pic" style={{ width: '80px' }}>
                    <img src={msg} alt="" />
                  </div>
                  <h2 className="fw-900 ls-2 text-grey inline-block vertical-bottom">Nulla</h2>
                  <QueueAnim className="" key='serviceContent3' type="bottom" duration={900} interval={100} delay={300}>
                    <p key="1" className="tz0 ls-2 mb-5 text-grey mt-10">Phasellus pretium nunc sit</p>
                    <p key="2" className="tz0 ls-2 mb-5 text-grey">Vivamus bibendum odio</p>
                    <p key="3" className="tz0 ls-2 mb-5 text-grey">Estibulum non</p>
                    <p key="4" className="tz0 ls-2 mb-5 text-grey">Mauris rhoncus felis</p>
                  </QueueAnim>
                </div>
              </div>
            </QueueAnim>
          </div>
        </div>
        <div className="merchantNotification bgCover">
          <h2 className="text-grey text-center fw-900">Etiam sed</h2>
          <h3 className="text-grey text-center ls-2 fw-900  mt-10 mb-20">Donec / Quisque / Aptent / Proin / Luctus</h3>
          <p className="text-grey text-center ls-2 mb-5">Phasellus tincidunt placerat</p>
          <p className="text-grey text-center ls-2">Sit amet convallis nibh efficitur</p>
          <div className="pic centerPic mt-40">
            <img src={systemIcon1} alt="" />
          </div>
        </div>
        <div className="container defaultpd">
          <div className="row">
            <div className="col-xs12 col-sm-6">
              <div className="inline-block pic mobileCenterPic" >
                <img src={uieasy} alt="" style={{ maxWidth: '250px' }} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 pt-30 mobileCenterText">
              <div className="inline-block">
                <h2 className="fw-900 ls-2 text-green inline-block vertical-bottom">Vivamus</h2>
                <p className="ls-2 mb-5 text-grey mt-10 mb-10">Mauris rhoncus felis quis</p>
                <p className="ls-2 mb-5 text-grey">Phasellus / Nulla / Etiam</p>
                <p className="ls-2 mb-5 text-grey">Magna / Ullamcorper / Integer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bgFlex">
          <div className="fbox41 pic">
            <img src={systemRooms} alt="" />
          </div>
          <div className="fbox41 titleBox">
            <div className="centerFlex">
              <h2 className="text-center text-green fw-900 mb-10">Etiam sed elit</h2>
              <p className="ls-2 text-grey text-center mb-5">Varius aliquet ex</p>
              <p className="ls-2 text-grey text-center mb-5">Cras quis tellus metus</p>
              <p className="ls-2 text-grey text-center mb-5">Praesent vehicula turpis vitae dolor</p>
            </div>
          </div>
          <div className="fbox11 hidden-sm hidden-xs">2</div>
        </div>
        <div className="defaultpd">
          <div className="container max740">
            <div className="row">
              <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                <div className="pic" style={{ maxWidth: '300px', margin: '0 auto' }}>
                  <img src={systemAnalisis} alt="" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 pt-30 mobileCenterText">
                <div className="inline-block">
                  <h2 className="ls-2 fw-900 text-grey mb-10">Maecenas</h2>
                  <h3 className="text-grey ls-2">Phasellus/ Ultrices</h3>
                  <h3 className="text-grey ls-2">Duis/ Porta/ Eros</h3>
                  <p className="ls-2 text-grey mt-10">Sed non elit. Praesent ipsum quam</p>
                </div>
              </div>
              <div className="col-sm-6 hidden-xs">
                <div className="pic picAnalisis">
                  <img src={systemAnalisis} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bgFlex">
          <div className="fbox71 pic">
            <img src={systemHome} alt="" />
          </div>
          <div className="fbox51">
            <div className="roomStatus">
              <h2 className="text-green ls-2 fw-900">Vestibulum cursus</h2>
              <p className="ls-2 text-grey mb-5 mt-10">Velit non nulla aliquet</p>
              <p className="ls-2 text-grey mb-5">Porta massa. Non sed diam orci</p>
              <p className="ls-2 text-grey mb-5">Morbi laoreet imperdiet risus</p>
              <p className="ls-2 text-grey mb-5">Lorem ipsum dolor sit amet adipiscing elit</p>
            </div>
          </div>
        </div>
        <div className="bgGray">
          <div className="container bgSafe bgCover">
            <div className="row">
              <div className="col-xs-12 col-sm-6 text-center">
                <div className="inline-block">
                  <div className="pic" style={{ maxWidth: '110px', height: '150px', margin: '0 auto' }}>
                    <img src={systemEnergy} alt="" />
                  </div>
                  <h2 className="text-white fw-900 mb-10">Cras quis</h2>
                  <p className="ls-2 text-white mb-5">Donec sed lobortis</p>
                  <p className="ls-2 text-white mb-5">Duis malesuad</p>
                  <p className="ls-2 text-white mb-5">Eu dictum orci dapibus</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 text-center">
                <div className="inline-block">
                  <div className="pic" style={{ maxWidth: '100px', height: '150px', margin: '0 auto' }}>
                    <img src={systemSafe} alt="" />
                  </div>
                  <h2 className="text-white fw-900 mb-10">Viverra</h2>
                  <p className="ls-2 text-white mb-5">Phasellus aliquam aliquet</p>
                  <p className="ls-2 text-white mb-5">Vestibulum cursus velit non nulla</p>
                  <p className="ls-2 text-white mb-5">Sed diam orci, mattis vel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info bgCover">
          <ScrollOverPack id="serviceAnimContent1" always={false} playScale={0.3} style={{ overflow: 'hidden' }}>
            <QueueAnim key='serviceAnimContent1Anim' type="bottom" duration={900} interval={100}>
              <h2 key="0" className="tz0 text-grey text-center fw-900">Rhoncus lacus</h2>
              <h3 key="1" className="tz0 text-grey text-center ls-2 fw-900  mt-10 ">Consectetur adipiscing elit</h3>
              <h3 key="2" className="tz0 text-grey text-center ls-2 fw-900  mb-20">Sollicitudin magna</h3>
              <p key="3" className="tz0 text-grey text-center ls-2 mb-5">Etiam rutrum massa in convallis commodo</p>
              <p key="4" className="tz0 text-grey text-center ls-2 mb-5">Morbi laoreet imperdiet risus, sit ame</p>
              <p key="5" className="tz0 text-grey text-center ls-2">Amet, consectetur adipiscing elit. Sed et rhoncus</p>
              <div key="6" className="tz0 pic centerPic mt-40">
                <img src={infoCountry} alt="" />
              </div>
            </QueueAnim>
          </ScrollOverPack>
        </div>
        <div className="container defaultpd max740">
          <div className="row">
            <div className="col-xs12 col-sm-6">
              <div className="inline-block pic mobileCenterPic" >
                <img src={systemCar} alt="" style={{ maxWidth: '250px' }} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 pt-30 text-center">
              <div className="inline-block">
                <h2 className="fw-900 ls-2 text-green inline-block vertical-bottom">Quisque vitae</h2>
                <h3 className="ls-2 mb-5 text-grey mt-10">Proin finibus nulla</h3>
                <p className="ls-2 mb-5 text-grey">Tae ex dictum, vitae</p>
                <p className="ls-2 mb-5 text-grey">Leo at suscipit varius, mauris </p>
                <p className="ls-2 mb-5 text-grey">perdiet risus, sit amet clis commodo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageFeature;