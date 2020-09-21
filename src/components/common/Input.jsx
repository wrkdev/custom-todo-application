import React from 'react';
import './css/Input.css';

const Input = (props) => {

    return (
        <div className="input-container">
            <input
                id={props.id}
                className="input"  
                placeholder={props.placeholder}
                type={props.type ? props.type : "text"}
                required
                autoComplete="off"
            />
            <div 
                id="status"
                className={`status`}
            />
        </div>
    );
};

export default Input;