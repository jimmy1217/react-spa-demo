import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

// img url-loader
import homeShadow from 'assets/homeShadow.png';
import homeIcon1 from 'assets/homeIcon1.png';
import homeIcon2 from 'assets/homeIcon2.png';
import energy from 'assets/energy.png';
import clock from 'assets/clock.png';

const PageIndex = (props) => {
    return (
        <section id="banner">
            <div className="picBg">
                <div className="container">
                    <div className="bannerContent">
                        <QueueAnim key='bannerContent' type="bottom" duration={900} interval={100} delay={500}>
                            <h2 key="1" className="bTitle h2 text-green text-center fw-500 w-shadow tz0"><span className="text-en fw-900">Lorem Ipsum </span>WebSite</h2>
                            <h3 key="2" className="bSubTitle h3 text-center text-light-black fw-400 ls-3 w-shadow text-en tz0">Neque porro quisquam estqui</h3>
                            <h5 key="3" className="h5 text-center text-light-black fw-400 ls-3 w-shadow tz0">ipsum quia dolor sit amet, consectetur</h5>
                            <div key="4" className="banner-info b-shadow tz0">
                                <h3 className="text-center text-white ls-4 tz0">Cras / Enim / Fringilla</h3>
                                <h3 className="text-center text-white ls-4 tz0">Donec / Et enimvel </h3>
                            </div>
                        </QueueAnim>
                    </div>
                </div>
            </div>
            <div>
                <Friendly />
                <RealTime />
                <Increase />
                <Reduce />
            </div>
        </section>
    );
};



const Friendly = () => {
    return (
        <div className="container">
            <h2 className="text-green text-center ls-8 fw-900 mt-40">Mauris</h2>
            <div className="smallShadow pic">
                <img src={homeShadow} alt="" />
            </div>
            <div className="row iconContent">
                <div className="col-xs-12 col-sm-6">
                    <div className="centerblock">
                        <div className="minWidthBlock">
                            <div className="pic mb-20 pic1 mr-10">
                                <img src={homeIcon1} alt="" />
                            </div>
                        </div>
                        <div className="inline-block">
                            <h3 className="text-grey ls-3 mb-5">Nullam</h3>
                            <p className="ls-2 mb-5 text-grey">Nisi molestie.</p>
                            <p className="ls-2 mb-5 text-grey">Lorem ac, urna.</p>
                            <p className="ls-2 mb-5 text-grey">Aliquet scelerisque.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="centerblock">
                        <div className="minWidthBlock">
                            <div className="pic mb-20 pic2 pr-10">
                                <img src={homeIcon2} alt="" />
                            </div>
                        </div>
                        <div className="inline-block">
                            <h3 className="text-grey ls-3 mb-5">Nam</h3>
                            <p className="ls-2 mb-5 text-grey">Orem nec.</p>
                            <p className="ls-2 mb-5 text-grey">Tempus ornare.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RealTime = () => {
    return (
        <ScrollOverPack id="realtimeAnimContent2" always={false} playScale={0.3} style={{ overflow: 'hidden' }}>
            <QueueAnim key='realtime_anim' className="tz0" type="right" duration={900} interval={300} >
                <div key="0" className="reaTime mt-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-7 text-center mb-40">
                                <ScrollOverPack id="realtimeAnimContent" className="pt-40" always={false} playScale={0.3} style={{ overflow: 'hidden' }}>
                                    <QueueAnim key='realtime_anim' type="left" duration={800} interval={300} delay={300}>
                                        <h2 key="1" className="italic text-grey mt-40 mb-40 fw-900 ls-8 tz0">
                                            Nullam<span className="air"></span>
                                        </h2>
                                        <h3 key="2" className="italic mb-5 ls-4 text-grey tz0">Vivamus vel</h3>
                                        <h3 key="3" className="italic mb-5 ls-4 text-grey tz0">accumsan sem et</h3>
                                        <h3 key="4" className="italic mb-5 ls-4 text-grey tz0">Vestibulum ut turpis</h3>
                                    </QueueAnim>
                                </ScrollOverPack>
                            </div>
                        </div>
                    </div>
                </div>
            </QueueAnim>
        </ScrollOverPack>
    );
}

const Increase = () => {
    return (
        <div className="roomBanner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 text-center bgGreen greenContent">
                        <ScrollOverPack id="roomAnimContent" always={false} playScale={0.3} style={{ overflow: 'hidden' }}>
                            <QueueAnim key='increase_anim2' type="right" duration={800} interval={300} >
                                <h2 key="0" className="text-grey mt-40 mb-40 fw-900 text-white ls-8 tz0">Cras ornare</h2>
                                <h3 key="1" className="text-grey mb-5 ls-4 text-white tz0">tellus eget</h3>
                                <h3 key="2" className="text-grey mb-5 ls-4 text-white tz0">libero aliquet</h3>
                                <h3 key="3" className="text-grey mb-5 ls-4 text-white tz0">Proin a libero congue</h3>
                            </QueueAnim>
                        </ScrollOverPack>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Reduce = () => {
    return (
        <div className="lessContent mb-40">
            <div className="container">
                <div className="row iconContent">
                    <div className="col-xs-12 mb-40 mt-40">
                        <h2 className="fw-900 text-grey ls-8">Donec</h2>
                    </div>
                    <div className="col-xs-12 col-sm-6 mb-40">
                        <div className="centerblock defaultInline">
                            <div className="minWidthBlock">
                                <div className="pic mb-20 inlinePic mr-10">
                                    <img src={energy} alt="" />
                                </div>
                            </div>
                            <div className="inline-block">
                                <h3 className="text-grey ls-3 mb-5">Etiam</h3>
                                <p className="ls-2 mb-5 text-grey">massa in convallis</p>
                                <p className="ls-2 mb-5 text-grey">Morbi laoreet</p>
                                <p className="ls-2 mb-5 text-grey">imperdiet risus</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 mb-40">
                        <div className="centerblock defaultInline">
                            <div className="minWidthBlock">
                                <div className="pic mb-20 inlinePic mr-10">
                                    <img src={clock} alt="" />
                                </div>
                            </div>
                            <div className="inline-block">
                                <h3 className="text-grey ls-3 mb-5">Praesent</h3>
                                <p className="ls-2 mb-5 text-grey">Mauris rhoncus</p>
                                <p className="ls-2 mb-5 text-grey">Duis porta et eros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageIndex;