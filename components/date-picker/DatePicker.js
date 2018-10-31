import React, {Component} from 'react';
import classnames from 'classnames';

import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import 'rc-calendar/assets/index.css';
import Popover from '../popover';

import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css';

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

  render() {
    const props = this.props;
    const state = this.state;

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
            showWeekNumber={false}
            defaultValue={[now.clone().add(-1, 'months'), now]}
            locale={zhCN}
            disabledDate={props.disabledDate}
            dateInputPlaceholder={['开始日期', '结束日期']}
            {...props.calendarProps}
          />
        </Popover.Content>
      </Popover>
    )
  }
}

export default DatePicker;
