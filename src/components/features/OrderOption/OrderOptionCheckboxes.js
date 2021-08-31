import styles from './OrderOption.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [...currentValue, id];
  } else {
    return currentValue.filter((value) => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <lebel key={value.id}>
        <input
          type="checkbox"
          value={value.id}
          checked={currentValue.includes(value.id)}
          onChange={(event) =>
            setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked)
            )
          }
        ></input>
        {value.name}({formatPrice(value.price)})
      </lebel>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};

export default OrderOptionCheckboxes;
