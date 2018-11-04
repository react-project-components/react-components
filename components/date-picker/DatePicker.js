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
        onChange: () => undefined
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible || false,
            value: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps && nextProps.visible !== this.state.visible) {
            this.setState({visible: nextProps.visible});
        }

        if (nextProps.value !== undefined) {
            this.setState({value: nextProps.value});
        }
    }

    onVisibleChange = (visible) => {
        this.setState({visible});
        this.props.onVisibleChange(visible);
    }

    onSelect = (value) => {
        this.setState({value});
        let visible = this.props.onChange(value);
        if (typeof visible === "boolean") {
            this.onVisibleChange(visible);
        } else {
            this.onVisibleChange(false);
        }
    }

    render() {
        const props = this.props;
        const state = this.state;

        const value = state.value;
        let classNames = classnames('date-picker', {active: props.active}, props.className);

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
                        onSelect={this.onSelect}
                        disabledDate={props.disabledDate}
                        {...props.calendarProps}
                    />
                </Popover.Content>
            </Popover>
        )
    }
}

export default DatePicker;
