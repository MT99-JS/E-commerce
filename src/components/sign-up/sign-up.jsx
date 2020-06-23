import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.scss";

export default class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword  ) {
      alert("passwords don't match");
      return;
    }

    

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Donot have an account?</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            required
            label="Name"
            onChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            required
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            required
            label="Password"
            onChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
            label="Confirm Password"
            onChange={this.handleChange}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
