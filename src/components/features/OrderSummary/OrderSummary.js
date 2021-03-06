import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = props => {
  return (
    <h2 className={styles.component}>Total:<strong>{calculateTotal(formatPrice(props.tripCost), props.options)}</strong></h2>
  );
};

OrderSummary.propTypes = {
  styles: PropTypes.node,
  component: PropTypes.object,
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
