import React from 'react';

const Input = ({ name, label, value, type, onChange, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input value={value} onChange={onChange} name={name}
                id={name} type={type} className="form-control" placeholder={"Enter " + name} autoComplete="off"/>
            {/* // Todo: Conditional Rendering */}
            {error && <div className="alert alert-danger p-0 text-center"> {error} </div>}
        </div>
    );
}

export default Input;