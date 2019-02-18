import React from "react";


const Input = props => {
    //console.log(props.value);
    return (
        <div className="form-group f3 ma1">
            <label for={props.name} className="form-label f3 fw4 dark-gray ma2">
                {props.title}
            </label>
            <input
                className="form-control mw6 f6 tc"
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;