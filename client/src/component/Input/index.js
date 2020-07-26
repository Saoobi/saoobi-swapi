import React from "react";
import PropTypes from "prop-types";

function Input({ icon, onChange, placeholder = "", value }) {
  return (
    <div className="InputContainer">
      <div className="InputContainer__Icon">{icon}</div>
      <input
        className="InputContainer__Input"
        placeholder={placeholder}
        type="text"
        size="50"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

Input.propTypes = {
  icon: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
