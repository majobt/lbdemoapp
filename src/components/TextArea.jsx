import React from "react";

const TextArea = props => (
    <div className="form-group">
        <label className={props.titlestyle}>{props.title}</label>
        <textarea
            className="form-control"
            name={props.name}
            rows={props.rows}
            cols={props.cols}
            value={props.value}
            onChange={props.handleChange}
            
        />
    </div>
);

export default TextArea;