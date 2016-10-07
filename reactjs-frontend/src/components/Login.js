import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    // var propTypes = {
    //     options: React.PropTypes.object,
    //     onChange: React.PropTypes.func,
    //     onSubmit: React.PropTypes.func
    // };
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }
    onChange(e) {
        this.setState({
            username: e.target.username,
            password: e.target.password
        });
    }

    onSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8990/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        });
    }

    render() {
        var options = {
            email: {
                label: "Email ddress",
                placeholder: "Email"
            },
            password: {
                label: "Password",
                placeholder: "Password"
            },
            checkbox: {
                text: "Remember for this computer"
            },
            submitButton: {
                text: "Submit"
            }
        };
        options = Object.assign(options, this.props.options || {});
        var formStyle = {
            width: '500px',
            margin: 'auto'
        };
        return (
            <div className="container">
                <form style={formStyle}>
                    <div className="form-group">
                        <label style={{float: 'left'}}>{options.email.label}</label>
                        <input type="email" onChange={this.onChange.bind(this)} className="form-control"
                               name="username" value={this.state.username}
                               placeholder={options.email.placeholder}/>
                    </div>
                    <div className="form-group">
                        <label style={{float: 'left'}}>{options.password.label}</label>
                        <input type="password" onChange={this.onChange.bind(this)} className="form-control"
                               name="password"
                               value={this.state.password}
                               placeholder={options.password.placeholder}/>
                    </div>
                    <div className="checkbox" style={{textAlign: 'left'}}>
                        <label>
                            <input type="checkbox" onChange={this.onChange.bind(this)}/> {options.checkbox.text}
                        </label>
                    </div>
                    <button type="submit" onClick={this.onSubmit.bind(this)}
                            className="btn btn-default">{options.submitButton.text}</button>
                </form>
            </div>
        );
    }
}

export default Login;