export default function userReducer (state = {}, action) {
    switch (action.type) {
      case 'AUTHENTICATE_USER':
        return action.payload.jwt
      case 'ADD_USER':
        let newState = Object.assign({}, state); 
        newState = action.payload        
        return newState
      default:
        return state
    }
}