import { combineReducers } from 'redux';
import horseReducer from './horseReducer'
import serviceReducer from './serviceReducer'
import rideReducer from './rideReducer'
import ownerReducer from './ownerReducer'
import userReducer from './userReducer'

const allReducers = combineReducers({
    horses: horseReducer,
    rides: rideReducer,
    services: serviceReducer,
    owners: ownerReducer,
    user: userReducer
})

export default allReducers;