import React from 'react';
import pt from 'prop-types';

import Button from '../../ui/Button/Button';
import getWeekDaysFromCurrent from '../../../utils/getWeekDaysFromCurrent';

import s from './DateCommand.module.css';

const DateCommand = ({ data, onClick }) => {
    const daysFromCurrent = getWeekDaysFromCurrent(data);

    const handleClick = (day) => () => {
        onClick(day);
    }

    return daysFromCurrent.map((day) =>
        <div key={day} className={s.button}>
            <Button onClick={handleClick(day)}>{day}</Button>
        </div>);
}

DateCommand.propTypes = {
    data: pt.string.isRequired,
    onClick: pt.func.isRequired,
}

export default DateCommand;