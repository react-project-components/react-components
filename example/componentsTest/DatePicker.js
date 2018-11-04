import React from 'react';
import {DatePicker} from '@component';
import './Popover.css';

const RangePicker = DatePicker.RangePicker;

export default class DatePickerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onChange = (value) => {
    console.log(value);
    // return true;
  }

  render() {

    console.log('re render');

    const state = this.state;
    return (
      <div className='popover-test'>
        <DatePicker className='margin-right-md'/>
        <RangePicker onChange={this.onChange}/>
      </div>
    );
  }
}
