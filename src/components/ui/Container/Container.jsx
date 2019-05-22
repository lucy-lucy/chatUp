import React from 'react';
import pt from 'prop-types';

import s from './Container.module.css';

function Container({ children }) {
    return <div className={s.wrapper}>
        {children}
    </div>
}

Container.propTypes = {
    children: pt.any,
};

Container.defaultProps = {
    children: null,
};

export default Container;
