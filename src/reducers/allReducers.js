import { combineReducers } from 'redux';
import horseReducer from './horseReducer'
import serviceReducer from './serviceReducer'
import rideReducer from './rideReducer'
import ownerReducer from './ownerReducer'

const allReducers = combineReducers({
    horses: horseReducer,
    rides: rideReducer,
    services: serviceReducer,
    owners: ownerReducer
})

export default allReducers;