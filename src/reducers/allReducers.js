import { combineReducers } from 'redux';

const allReducers = combineReducers({
    horses: horseReducer,
    rides: rideReducer,
    trainingOptions: trainingOptionReducer,
    owners: ownerReducer
})

export default allReducers;

function horseReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_HORSES':
            return [...state, action.payload.data]

        default:
            return state
    }
}

function rideReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_RIDES':
            return [...state, action.payload.data]

        case 'ADD_RIDE':
            return { ...state, rides: [...state.rides, action.payload] }

        default:
            return state
    }
}

function trainingOptionReducer(state = [], action) {
    switch(action.type) {
        case 'FETCH_TRAINING_OPTIONS':
            return [...state, action.payload.data] 

        default:
            return state
    }
}

function ownerReducer(state = [], action) {
    switch(action.type) {
        default:
            return state
    }
}