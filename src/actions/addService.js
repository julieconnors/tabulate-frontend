export function addService(data) {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/services', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(service => dispatch({ type: 'ADD_SERVICE', payload: service }))
        .catch(error => {
            console.log('error', error.message)
        })
    }
}