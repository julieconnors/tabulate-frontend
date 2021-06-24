export function findUser(id) {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/users/${id}`)
        .then(res => res.json())
        .then(userData => {
            localStorage.setItem('token', userData.jwt)
            localStorage.setItem('id', userData.user.data.id)
            dispatch({ type: 'AUTH_USER', payload: userData })
        })
    }
}