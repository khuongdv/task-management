import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="row" style={this.props.style}>
                <p>(c) by Songokute Inc. 2016. Email me at: <a href="mailto:songokute@live.com">songokute@live.com</a></p>
            </div>
        );
    }
}

export default Footer;