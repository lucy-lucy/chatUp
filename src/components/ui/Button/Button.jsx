import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';

// Utils
import noop from '@tinkoff/utils/function/noop';

import s from './Button.module.css';

function Button({ children, onClick, type, theme, disabled, smallOnPhone }) {
    return <button
        className={cn(s.button, {
            [s[`button_theme_${theme}`]]: true,
            [s['button_smallOnPhone']]: smallOnPhone,
        })}
        type={type}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>;
}

Button.propTypes = {
    children: pt.oneOfType([pt.string, pt.number]),
    onClick: pt.func,
    type: pt.string,
    theme: pt.oneOf(['default', 'red', 'gray']),
    disabled: pt.bool,
};

Button.defaultProps = {
    children: '',
    onClick: noop,
    type: 'button',
    theme: 'default',
    disabled: false,
}

export default Button;