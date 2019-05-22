import React from 'react'
import pt from 'prop-types';

import Button from '../../ui/Button/Button';

import s from './CompleteCommand.module.css';

const CompleteCommand = ({ data, onSubmit, onCancel }) => {
  const handleCancel = (value) => () => {
    onCancel(value);
  }

  return data.map((value, i) => {
      const isLogOutButton = i === 0;

      return <div key={i} className={s.button}>
          <Button
            theme={isLogOutButton ? 'red' : 'default'}
            onClick={isLogOutButton ? onSubmit : handleCancel(value)}
          >
            {value}
          </Button>
      </div>;
    });
}

CompleteCommand.propTypes = {
  data: pt.array.isRequired,
  onSubmit: pt.func.isRequired,
  onCancel: pt.func.isRequired,
}

export default  CompleteCommand