import React from "react";
import "./form-input.scss";

const FormInput = ({ onChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={onChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label.toUpperCase()}
      </label>
    ) : null}
  </div>
);

export default FormInput;
