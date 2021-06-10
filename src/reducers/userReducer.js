export default function userReducer (state = {}, action) {
    switch (action.type) {
      case 'AUTH_USER':
        let newState = Object.assign({}, state); 
        newState = action.payload        
        return newState
      default:
        return state
    }
}