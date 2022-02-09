import React from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import { ReactComponent as Logo } from "../../assets/img/google.svg";

import '../sign-in/sign-in.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }
        
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>Ya tengo una cuenta</h2>
                <span>Ingresa con tu email y contraseña</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />
              
                    <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='Password'
                        required
                    />
             
                    <div className="buttons">
                        <CustomButton type="submit">Iniciar Sesión</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Google
                            <Logo className="logo-google" />
                        </CustomButton>

                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
