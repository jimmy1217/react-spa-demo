import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import aboutMap from 'assets/about-map.png';

const PageAbout = () => {
  return (
    <section id="pageAbout" className="defaultpd">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <QueueAnim className="" key='aboutContent' type="bottom" duration={900} interval={100} delay={300}>
              <h1 key="0" className="tz0 text-green fw-900 ls-2 mb-30">Neque quisquam</h1>
              <h6 key="1" className="tz0 text-grey ls-2 mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus molestie, a semper neque sodales. Praesent turpis risus, ornare in lacus.  In iaculis tortor aca. Duis malesuada quam sit rhoncus venenatis dolor eu tempus.</h6>
              <h6 key="2" className="tz0 text-grey ls-2 mb-20">Turpis vitae dolor tempor, nec tempus ex condimentum. In iaculis tortor ac accumsan viverra. Duis malesuada quam sit amet justo feugiat pretium. Quisque rhoncus.</h6>
              <h6 key="3" className="tz0 text-grey ls-2">Phasellus pretium nunc sit amet diam commodo, ut maximus augue hendrerit. Vivamus bibendum odio ut euismod vestibulum. Duis venenatis, lacus id volutpat porttitor , sem risus tempor sem, vel commodo sapien mauris non orci. Cras eget ornare dui. Nulla vel varius lectus, vitae posuere nisl. Morbi lectus nunc.</h6>
              <div key="4" className="tz0 pic aboutMap mt-40">
                <img src={aboutMap} alt="" />
              </div>
            </QueueAnim>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageAbout;