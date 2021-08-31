import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <input className={styles.input}
    type='text'
    value={currentValue}
    onChange={event =>setOptionValue(event.currenrTarget.value)}
  />
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  text: PropTypes.string,
};

export default OrderOptionText;
