export default function horseReducer (state = [], action) {
    switch (action.type) {
      case 'FETCH_HORSES':
        return action.payload.data 
      case 'ADD_HORSE':
        return state.concat([action.payload.data]) 
      default:
        return state
    }
}