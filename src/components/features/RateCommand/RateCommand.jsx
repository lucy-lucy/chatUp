import React from 'react';
import pt from 'prop-types';

import Button from '../../ui/Button/Button';

import s from './RateCommand.module.css';

const RateCommand = ({ data: [startRate, endRate], onClick }) => {
    const handleClick = (value) => () => {
        onClick(value);
    }

    const renderStars = () => {
        const stars = [];

        for(let i = startRate; i <= endRate; i++) {
            stars.push(<div key={i} className={s.button}>
                <Button onClick={handleClick(i)}>{i}</Button>
            </div>);
        }

        return stars;
    }

    return renderStars();
}

RateCommand.propTypes = {
    data: pt.array.isRequired,
    onClick: pt.func.isRequired,
}

export default RateCommand;