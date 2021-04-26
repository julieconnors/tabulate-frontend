export default function serviceReducer (state = [], action) {
    switch (action.type) {
      case 'FETCH_SERVICES':
        return action.payload.data
      case 'ADD_SERVICE':
        return state.concat([action.payload.data])
      default:
        return state
    }
}