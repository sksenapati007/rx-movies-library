import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './../common/input';
import Select from './select';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    //Todo: Creates a ref object
    // username = React.createRef();

    validate = () => {

        // Todo: takes 2 args object to validate, schema and abortEarly : flase
        //  Todo: abortEarly false validates other inputs even if one has failed
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
            return errors;
        }

        // TODO: without JOI
        /*  const errors = {};
         const { data } = this.state;
         if (data.username.trim() === '')
             errors.username = '* Username is required.';
         if (data.password.trim() === '')
             errors.password = '* Password is required.';

         return Object.keys(errors).length === 0 ? null : errors; */
    };

    // ToDo: property validation with JOI
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };
    // ToDo: property validation without JOI
    /* validateProperty = ({ name, value }) => {
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required.'
        }
        if (name === 'password') {
            if (value.trim() === '') return 'Password is required.'
        }
    } */

    handleSubmit = (e) => {
        //  Todo: for ref example
        //    const username = this.state.data.username;
        //    console.log(username);

        // TODO: Prevents submission of the form and stops the reload
        e.preventDefault();
        const errors = this.validate();
        // console.log(errors);

        // Todo: Errors property should always to be set with an object it should not be null
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    // Todo: controlled elements
    handleChange = ({ currentTarget: input }) => {

        //  Todo: onchange error validation
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data }
        // Todo: handling singe input
        // data.username = e.currentTarget.value;

        // Todo: to handle multiple inputs we use [] and name attribute from input fields
        data[input.name] = input.value;

        this.setState({
            data, errors
        });
    };

    renderButton(label) {
        return (
            // <div class="d-flex justify-content-center">
                <button className="btn btn-primary  " disabled={this.validate()}>{label}</button>
            // </div>
        );
    }

    renderInput(name, label, type = "text") {
        const { data, errors } = this.state;

        return (
            <Input
                name={name}
                value={data[name]}
                label={label}
                type={type}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

}

export default Form;




/* validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
        errors[item.path[0]] = item.message;
        return errors;
    }
};
validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
};
handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
};
handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data }
    data[input.name] = input.value;
    this.setState({
        data, errors
    });
}; */