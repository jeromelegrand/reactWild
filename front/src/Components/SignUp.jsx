import React, {Component} from 'react';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "mail@default.com",
            password: "",
            lastname: "",
            firstname: "",
        };
        this.updateMail = this.updateMail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateLastname = this.updateLastname.bind(this);
        this.updateFirstname = this.updateFirstname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateMail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    updateLastname(e) {
        this.setState({
            lastname: e.target.value,
        });
    }

    updateFirstname(e) {
        this.setState({
            firstname: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render () {
        return (
        <div>
            <h1>{JSON.stringify(this.state)}</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.updateMail} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={this.state.password} name="password" onChange={this.updatePassword} />
                </div>
                <div>
                    <label>Password confirmation</label>
                    <input type="password" name="password_verif" />
                </div>
                <div>
                    <label>Nom</label>
                    <input type="text" value={this.state.lastname} name="lastname" onChange={this.updateLastname} />
                </div>
                <div>
                    <label>Prénom</label>
                    <input type="text" value={this.state.firstname} name="firstname" onChange={this.updateFirstname} />
                </div>
                
                <input type="submit" value="Soumettre" />
            </form>
        </div>
        );
    }
}