export default function appReducer(state = {
    horses: [],
    trainingOptions: [],
    rides: [],
    owners: []
}, action) {
    switch (action.type) {
        case 'FETCH_HORSES':
            return { ...state, horses: action.payload.data}

        case 'FETCH_RIDES':
            return {...state, rides: action.payload.data}

        case 'ADD_RIDE':
            return { ...state, rides: [...state.rides, action.payload.data] }

        case 'FETCH_TRAINING_OPTIONS':
            return { ...state, trainingOptions: action.payload.data } 

        case 'FETCH_OWNERS':
            return { ...state, owners: action.payload.data }  
        
        case 'ADD_HORSE':
            return { ...state, horses: [...state.horses, action.payload.data] }

        default:
            return state
    }
}