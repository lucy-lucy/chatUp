import React from 'react';
import pt from 'prop-types';
import noop from '@tinkoff/utils/function/noop';
import s from './Input.module.css';

function Input({ id, name, label, placeholder, type, value, onChange }) {
    return <label htmlFor={id}>
        {label && <span className={s.label}>
            {label}
        </span>}
        <input
            className={s.input}
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </label>;
};

Input.propTypes = {
    id: pt.string.isRequired,
    name: pt.string.isRequired,
    label: pt.string,
    placeholder: pt.string,
    type: pt.string,
    value: pt.string,
    onChange: pt.func,
}

Input.defaultProps = {
    label: '',
    placeholder: '',
    type: 'text',
    value: '',
    onChange: noop,
}

export default Input;