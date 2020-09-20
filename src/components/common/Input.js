import React, { useState } from 'react';
import './css/Input.css';

const Input = (props) => {
    const [focused, setFocused] = useState(false);
    const [invalid, setInvalid] = useState(false);

    return (
        <div className="input-container">
            <input
                id={props.id}
                className="input"  
                placeholder={props.placeholder}
                type={props.type ? props.type : "text"}
                required
                autoComplete="off"
                onFocus={() => setFocused(!focused)}
                onInvalid={() => setInvalid(!invalid)}
            />
            <div 
                id="status"
                className={`status
                    ${focused ? "statusFocused" : ""}
                    ${invalid ? "statusInvalid" : ""}
                `}
            />
        </div>
    );
};

export default Input;