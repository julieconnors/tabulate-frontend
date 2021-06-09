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
        .then(user => {
            dispatch({ type: 'ADD_USER', payload: user })
        })
    }
}