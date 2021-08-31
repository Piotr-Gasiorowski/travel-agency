import styles from './OrderOption.scss';
import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, setOptionValue, limits}) => (
  <div className={styles.number}>
    <input
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currenrTarget.value)}
    />
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;
