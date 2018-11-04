import React  from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const Button = Loadable({
    loader: () => import('../componentsTest/Button'),
    loading:Loading
});


const Modal = Loadable({
    loader: () => import('../componentsTest/Modal'),
    loading:Loading
});

const Popover = Loadable({
    loader: () => import('../componentsTest/Select'),
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
        component:Modal,
        routeTxt:'modal'
    },
    {
        component:Popover,
        routeTxt:'select'
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