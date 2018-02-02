import pure from 'recompose/pure';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router';
const routePage = require('route');

const Header = pure(props => {
    const { activePage, bgDeep, onHandleChange, isOpen } = props;
    return (
        <header id="header" className={classNames("mainHeader", { "bg-deep-grey": bgDeep, isOpen: isOpen })}>
            <div className="container h100">
                <div className="row">
                    <QueueAnim key='queueAnim_header2' type="left" className="h100 col-xs-12">
                        <nav className="left" id="mobile_menu" key="1">
                            <a href="#menu" onClick={onHandleChange('menuVisible', true)}><span>Menu</span></a>
                        </nav>
                        <Link to={`/${routePage['index']}`} className="newLogo fw-900" key="2">Lorem Ipsum</Link>
                        <div id="top_menu_list" key="3">
                            <ul>
                                {Object.keys(routePage).length
                                    ? Object.keys(routePage).map((pageTitle) => {
                                        if (pageTitle !== 'index') {
                                            return (
                                                <li key={`headerList${pageTitle}`} className={classNames({ active: activePage === `/${routePage[pageTitle]}` })}>
                                                    <Link to={`/${routePage[pageTitle]}`} className="p ls-2">{pageTitle}</Link>
                                                </li>)
                                        }else{
                                            return <noscript key={`headerList${pageTitle}`} />
                                        }
                                    })
                                    : null}
                            </ul>
                        </div>
                    </QueueAnim>
                </div>
            </div>
        </header>
    );
});

export default Header;