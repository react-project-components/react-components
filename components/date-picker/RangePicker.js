import React, {Component} from 'react';
import classnames from 'classnames';

import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import 'rc-calendar/assets/index.css';
import Popover from '../popover';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
const now = moment();
now.utcOffset(8);

const formatStr = 'YYYY/MM/DD';

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

function format(v) {
  return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
  return v && v[0] && v[1];
}

const defaultValue = [now.clone().add(-1, 'months'), now];

class RangePicker extends Component {
  static defaultProps = {
    onVisibleChange: f => f,
    disabledDate: () => false,
    calendarProps: {},
    onChange: f => f
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value: [],
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
    // if(value.length !== 2) return;
    this.setState({value});
    isValidRange(value) && this.props.onChange(value);
  }

  render() {
    const props = this.props;
    const state = this.state;

    let value = state.value;
    let isValid = isValidRange(value);
    let active = props.active && isValid;
    let classNames = classnames('date-range-picker', {active: active}, props.className);
    return (
      <Popover onVisibleChange={this.onVisibleChange} type='click' visible={state.visible}>
        <Popover.Trigger>
          <div className={classNames}>
            {
              isValid ? `${format(value[0])} 至 ${format(value[1])}` :
                '请选择精确时间段'
            }
          </div>
        </Popover.Trigger>
        <Popover.Content>
          <RangeCalendar
            onChange={this.onChange}
            showWeekNumber={false}
            locale={zhCN}
            defaultValue={defaultValue}
            hoverValue={value}
            disabledDate={props.disabledDate}
            dateInputPlaceholder={['开始日期', '结束日期']}
            showDateInput={false}
            {...props.calendarProps}
          />
        </Popover.Content>
      </Popover>
    )
  }
}

export default RangePicker;
