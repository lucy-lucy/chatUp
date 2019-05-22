import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';

import s from './Message.module.css';

function Message({ text, author, incoming }) {
    return <div className={cn(s.message, { [s.message_incoming]: incoming })}>
        <div className={s.author}>{author}:</div>
        {text}
    </div>;
};

Message.propTypes = {
    text: pt.oneOfType([pt.string, pt.number]).isRequired,
    author: pt.string.isRequired,
    incoming: pt.bool,
};

Message.defaultProps = {
    incoming: false,
};

export default Message;