const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div id="footer__store" className="col-xs-12 col-sm-6">
            <p className="ls-2 mb-5">APP Download</p>
            <a href="#" className="storeLink appStore mr-20"></a>
            <a href="#" className="storeLink googlePlay"></a>
          </div>
          <div id="footer__qrCode" className="col-xs-12 col-sm-6 text-left">
            <div className="pic">
              <img src="/images/qrcode.svg" alt="" />
            </div>
            <div className="inline-block">
                <p className="ls-2 mt-10 mb-5">www.lorem-example.com</p>
                <p className="ls-2">Phasellus 0100-010-010</p>
            </div>
          </div>
          <div className="col-xs-12 mt-20">
            <p className="ls-2 small">© Design by Vica Ho</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;