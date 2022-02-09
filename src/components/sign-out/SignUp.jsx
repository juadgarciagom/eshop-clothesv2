import React from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import '../sign-out/sign-up.scss'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    //Submit the user to DB
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Contraseñas deben coincidir')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            //Clear our form for the next user
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            })

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">No tengo una cuenta</h2>
                <span>Registrate con tu email y contraseña</span>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">Registrarse</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
