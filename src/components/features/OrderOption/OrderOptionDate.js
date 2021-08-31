import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  static propTypes = {
    setOptionValue: PropTypes.func,
  };

  handleChange = (date) => {
    this.setState ({
      startDate: date,
    });
    this.props.setOptionValue(date);
  };

  render () {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default OrderOptionDate;
