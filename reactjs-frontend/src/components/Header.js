import React, {Component} from 'react';
class Header extends Component {
    render() {
        return (
            <div className="row">
                <div style={{width: '80%', background: 'grey'}}>
                    <p
                        style={{
                        height: '170px', overflow: 'hidden', margin: 'auto'
                    }}
                    >
                        <img style={{width: '100%'}}
                             src="https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/14264252_1130169507029336_4267654892081967394_n.jpg?oh=6a8184df184c597fdb87e9a53a95f616&oe=589B64FB"/>
                    </p>
                    <p>List of programming language Mr.{this.props.data.name} knows:</p>
                    <ul>

                        {
                            this.props.data.programming_language.map((prg) =><li>{prg}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;