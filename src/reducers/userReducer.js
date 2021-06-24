export default function userReducer (state = {}, action) {
    switch (action.type) {
      case 'AUTH_USER':
        let newState = Object.assign({}, state); 
        newState = action.payload        
        return newState
      case 'LOGOUT_USER':
        let resetState = Object.assign({}, state); 
        resetState = {}
        return resetState
      default:
        return state
    }
}