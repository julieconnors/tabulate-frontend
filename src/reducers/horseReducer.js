export default function horseReducer(state = {
    horses: []
}, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_HORSES':
            return { horses: action.payload.data }
        default:
            return state
    }
}