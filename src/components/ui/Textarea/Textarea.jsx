import React from 'react';
import pt from 'prop-types';
import noop from '@tinkoff/utils/function/noop';
import s from './Textarea.module.css';

function Textarea({ name, placeholder, value, onChange }) {
    return <textarea
            className={s.textarea}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />;
};

Textarea.propTypes = {
    name: pt.string.isRequired,
    label: pt.string,
    placeholder: pt.string,
    value: pt.string,
    onChange: pt.func,
    rows: pt.number,
}

Textarea.defaultProps = {
    label: '',
    placeholder: '',
    value: '',
    onChange: noop,
}

export default Textarea;