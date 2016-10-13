import FrontPage from 'views/FrontPage';
import React from 'react';
import ReactDOM from 'react-dom';

require('stylesheets/base.scss');

/**
 * App entry point
 */

ReactDOM.render(<FrontPage />, document.getElementById('browser_mount'));