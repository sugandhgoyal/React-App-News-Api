import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import HomePage from '../containers/HomePage/index';
import NewsLists from '../containers/NewsLists/index';
import Menu from '../components/Menu';
import Newspaper from '../containers/Newspaper/index';
import TopNewspaper from '../containers/TopNewspaper';
import Popular from '../containers/Popular';

export default (
    <Router>
        <div>
            <Route exact path="*" component={Menu} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/news/*" component={NewsLists} />
            <Route exact path="/newspaper/*" component={Newspaper} />
            <Route exact path="/topnewspaper/*" component={TopNewspaper} />
            <Route exact path="/popular" component={Popular} />
        </div>
    </Router>
)