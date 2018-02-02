import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import qrcode from 'assets/qrcode.svg';

const PageContact = () => {
  return (
    <section id="pageContact">
      <div className="container">
        <div className="row">
          <QueueAnim className="" key='contactContent' type="bottom" duration={900} interval={100} delay={300}>
            <div key="0" className="col-xs-12 col-sm-6 contactInfo">
              <div className="flex">
                <div className="flex-title">
                  <h3 className="ls-2 text-grey">Mole</h3>
                </div>
                <div className="flex-content b-3">
                  <div className="text-grey ls-2 textBlock mb-10">
                    <label htmlFor="">Seer / </label>
                    <input
                      type="text"
                      autoCorrect="off"
                      autoCapitalize="none" />
                  </div>
                  <div className="text-grey ls-2 textBlock mb-10">
                    <label htmlFor="">Odio / </label>
                    <input
                      type="text"
                      autoCorrect="off"
                      autoCapitalize="none" />
                  </div>
                  <div className="text-grey ls-2 textBlock">
                    <label htmlFor="">Quam / </label>
                    <input
                      type="text"
                      autoCorrect="off"
                      autoCapitalize="none" />
                  </div>
                </div>
              </div>
              <div className="flex mt-40">
                <div className="flex-title">
                  <h3 className="ls-2 text-grey">Mus</h3>
                </div>
                <div className="flex-content b-2">
                  <textarea name="" id="" rows="3"></textarea>
                </div>
              </div>
              <div className="btn btn-primary btn-md pull-right mt-20">Submit</div>
            </div>
            <div key="1" className="col-xs-12 col-sm-6 companyInfo">
              <h3 className="text-green ls-1">Nulla quis porta tellus</h3>
              <p className="ls-2 text-grey mt-10">www.lorem-example.com</p>
              <p className="ls-2 text-grey mb-10">T:01-1111-1111 / F:02-2222-2222</p>
              <p className="ls-2 text-grey">Duis vulputate 0100-010-010</p>
              <div className="pic r-5 mt-40 mb-40" style={{ width: '70px' }}>
                <img src={qrcode} alt="" />
              </div>
            </div>
          </QueueAnim>
        </div>
      </div>
    </section>
  );
};

export default PageContact;