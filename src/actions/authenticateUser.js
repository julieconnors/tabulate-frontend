export function authenticateUser(data) {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/login', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(userData => dispatch({ type: 'AUTH_USER', payload: userData }))
    }
}