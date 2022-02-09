import React from "react";

import '../form-input/form-input.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input
                type="text"
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />
            {label ? (
                <label
                    className={`${
                        otherProps.value ? 'shrink' : ""
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default FormInput;
