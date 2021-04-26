export default function ownerReducer (state = [], action) {
    switch (action.type) {
      case 'FETCH_OWNERS':
        return action.payload.data 
      default:
        return state
    }
}