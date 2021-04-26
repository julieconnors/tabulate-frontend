export default function rideReducer (state = [], action) {
    switch (action.type) {
      case 'FETCH_RIDES':
        return action.payload.data
      case 'ADD_RIDE':
        return state.concat([action.payload.data]) 
      default:
        return state
    }
}