import React from 'react';
import pt from 'prop-types';

import commandSchema from '../../../constants/commandSchema';

import noop from '@tinkoff/utils/function/noop';

import s from './Command.module.css';

const EMPTY_HANDLERS = {};

const Command = ({ type, data, onSelect, onLogout }) => {
    const Component = commandSchema[type].component;
    const { title } = commandSchema[type];

    function getHandlers() {
        switch (type) {
            case commandSchema.date.type:
            case commandSchema.rate.type:
                return ({
                    onClick: onSelect,
                });
                
            case commandSchema.complete.type:
                return ({
                    onCancel: onSelect,
                    onSubmit: onLogout,
                });
    
            default:
                return EMPTY_HANDLERS;
        }
    }

    return <>
        {title && <h3 className={s.title}>{title}</h3>}
        <Component {...getHandlers()} data={data} />
    </>;
};

Command.propTypes = {
    type: pt.string.isRequired,
    data: pt.any.isRequired,
    onSelect: pt.func,
    onLogout: pt.func,
};

Command.defaultProps = {
    title: '',
    onSelect: noop,
    onLogout: noop,
};

export default Command;