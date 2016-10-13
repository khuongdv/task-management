import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class FrontPage extends React.Component {
    
    render() {
        var style = {
            margin: 'auto', width: '50%', background: 'rgb(215, 227, 188)'
        };
        var styleFooter = {
            fontFamily: 'Verdana',
            fontSize: '10px',
            textAlign: 'center'
        };
        var data = {
            name: "Dao Van Khuong",
            age: 25,
            programming_language: ["Java", "Javascript", "PHP", "C++"]
        };
        return (
            <div className="container">
                <Header style={style} data={data}/>
                <Footer style={styleFooter}/>
            </div>
        );
    }
}

export default FrontPage;