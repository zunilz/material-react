import {combineReducers} from 'redux';
import DrawerState from './drawerState';

const allReducers = combineReducers(
    {
        drawerState: DrawerState
    }
);

export default allReducers;