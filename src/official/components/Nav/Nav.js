import pure from 'recompose/pure';
import { Overlay } from 'components';
import { Link, browserHistory } from 'react-router';
const routePage = require('route');

const NavLink = ({ title, url, onHandleChange }) => <a href="#" className="p ls-2" onClick={(e) => {
    browserHistory.push(url);
    onHandleChange('menuVisible', false)(e);
}}>{title}</a>;

const Nav = pure(({ visible, activePage, onHandleChange }) => {
    return (
        <nav id="menu" className={classNames({ visible: visible })}>
            <Overlay visible={visible}>
                <div onClick={onHandleChange('menuVisible', false)} className="overlayContent"></div>
            </Overlay>
            <ul className="links">
                {Object.keys(routePage).length
                    ? Object.keys(routePage).map((pageTitle) =>
                        <li key={`pageList_${pageTitle}`} className={classNames({ active: activePage === `/${routePage[pageTitle]}` })}>
                            <NavLink title={pageTitle} url={`/${routePage[pageTitle]}`} onHandleChange={onHandleChange} />
                        </li>)
                    : null}
            </ul>
        </nav>
    );
});

export default Nav;