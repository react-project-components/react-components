import React from 'react';
import DatePicker from '../../components/date-picker';
import './Popover.css';

const RangePicker = DatePicker.RangePicker;

export default class DatePickerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const state = this.state;
    return (
      <div className='popover-test'>
        <RangePicker />
      </div>
    );
  }
}
