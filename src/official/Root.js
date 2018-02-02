import React, { Component } from 'react';
import { Router, Route, Link, IndexRedirect, browserHistory } from 'react-router';
import Template from './page/Template';
const routePage = require('./route');

const PageIndex = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./page/PageIndex').default)
    }, 'PageIndex')
}

const PageService = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./page/PageService').default)
    }, 'PageService')
}

const PageContact = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./page/PageContact').default)
    }, 'PageContact')
}

const PageAbout = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./page/PageAbout').default)
    }, 'PageAbout')
}
// 暫時關閉
// const PageComponent = (location, callback) => {
//     require.ensure([], require => {
//         callback(null, require('./page/PageComponent').default)
//     }, 'PageComponent')
// }

const routes = (
    <Route path="/" component={Template}>
        <IndexRedirect to="/index.html" />
        <Route path={`/${routePage['index']}`} getComponent={PageIndex} />
        <Route path={`/${routePage['about']}`} getComponent={PageAbout} />
        <Route path={`/${routePage['service']}`} getComponent={PageService} />
        <Route path={`/${routePage['contact']}`} getComponent={PageContact} />
        {/*<Route path={`/${routePage['component']}`} getComponent={PageComponent} />*/}
    </Route>
);

const Root = () =>
    <Router history={browserHistory}>
        {routes}
    </Router>
    
export default Root;