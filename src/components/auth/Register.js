import React from "react";
import { Field } from "redux-form";

class Register extends React.Component {
  renderInput = ({ input, meta, label }) => {
    return (
      <>
        <label>{label}</label>
        <input type="text" {...input} />
      </>
    );
  };
  render() {
    return (
      <div className="ui ">
        <form className="ui form container">
          <Field
            name="login"
            label="Enter login"
            component={this.renderInput}
          />
          <Field
            name="pasword"
            label="Enter pasvort"
            component={this.renderInput}
          />
          <Field
            name="fullName"
            label="Enter Fullname"
            component={this.renderInput}
          />
          <Field name="age" label="Enter age" component={this.renderInput} />
          <button className="ui button red">
            <i className="icon apple" /> Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
