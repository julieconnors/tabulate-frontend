export function addUser(data) {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(userData => {
            localStorage.setItem('token', userData.jwt)
            localStorage.setItem('id', userData.user.data.id)
            dispatch({ type: 'AUTH_USER', payload: userData })
        })
    }
}