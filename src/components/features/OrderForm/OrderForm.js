import React from 'react';
//import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  variant: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
