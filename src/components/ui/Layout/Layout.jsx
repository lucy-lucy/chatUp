import React from 'react';
import pt from 'prop-types';

import Button from '../Button/Button';

import s from './Layout.module.css';

function Layout({ children, isAuth, onLogout }) {
    return <div className={s.wrapper}>
        <div className={s.header}>
            <h1 className={s.title}>
                ChatUp
            </h1>
            {isAuth && <div className={s.logoutButton}>
                <Button
                    theme='gray'
                    onClick={onLogout}
                    smallOnPhone
                >
                    Log Out
                </Button>
            </div>}
        </div>
        <div className={s.content}>
            <div className={s.inner}>
                {children}
            </div>
        </div>
    </div>;
};

Layout.propTypes = {
    children: pt.node.isRequired,
    onLogout: pt.func.isRequired,
    isAuth: pt.bool,
};

Layout.defaultProps = {
    isAuth: false,
};

export default Layout;