import React  from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const Button = Loadable({
    loader: () => import('../componentsTest/Button'),
    loading:Loading
});


const Dialog = Loadable({
    loader: () => import('../componentsTest/Dialog'),
    loading:Loading
});

const Popover = Loadable({
    loader: () => import('../componentsTest/Popover'),
    loading:Loading
});

const ToolTip = Loadable({
    loader: () => import('../componentsTest/ToolTip'),
    loading:Loading
});


const Checkbox = Loadable({
    loader: () => import('../componentsTest/Checkbox'),
    loading:Loading
});


const Pagination = Loadable({
    loader: () => import('../componentsTest/Pagination'),
    loading:Loading
});

const DatePicker = Loadable({
    loader: () => import('../componentsTest/DatePicker'),
    loading:Loading
});


export default [
    {
        component:Button,
        routeTxt:'button'
    },
    {
        component:Dialog,
        routeTxt:'dialog'
    },
    {
        component:Popover,
        routeTxt:'popover'
    },
    {
        component:ToolTip,
        routeTxt:'toolTip'
    },
    {
        component:Checkbox,
        routeTxt:'checkbox'
    },
    {
        component:Pagination,
        routeTxt:'pagination'
    },
    {
        component:DatePicker,
        routeTxt:'datePicker'
    },
]