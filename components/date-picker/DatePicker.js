import React, {Component} from 'react';
import classnames from 'classnames';

import Calendar from 'rc-calendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import 'rc-calendar/assets/index.css';
import Popover from '../popover';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
const now = moment();
now.utcOffset(8);

const formatStr = 'YYYY/MM/DD';

function format(v) {
  return v ? v.format(formatStr) : '';
}

class DatePicker extends Component {
  static defaultProps = {
    onVisibleChange: f => f,
    disabledDate: () => false,
    calendarProps: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({visible: nextProps.visible});
    }
  }

  onVisibleChange = (visible) => {
    this.setState({visible});
    this.props.onVisibleChange(visible);
  }

  onChange = (value) => {
    this.setState({value});
  }

  render() {
    const props = this.props;
    const state = this.state;

    const value = state.value;
    let classNames = classnames('date-picker', {active: props.visible}, props.className);

    return (
      <Popover onVisibleChange={this.onVisibleChange} type='click' visible={state.visible}>
        <Popover.Trigger>
          <div className={classNames}>
            {
              value ? `${format(value)}` :
                '请选择时间'
            }
          </div>
        </Popover.Trigger>
        <Popover.Content>
          <Calendar
            showWeekNumber={false}
            locale={zhCN}
            defaultValue={now}
            selectedValue={value}
            showToday
            showDateInput={false}
            showOk={false}
            onChange={this.onChange}
            disabledDate={props.disabledDate}
            {...props.calendarProps}
          />
        </Popover.Content>
      </Popover>
    )
  }
}

export default DatePicker;
