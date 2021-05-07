export function addHorse(data) {
    // pass dispatch function to dispatch the action object to store after post fetch has resolved
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/horses', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(horse => dispatch({ type: 'ADD_HORSE', payload: horse }))
        .catch(error => {
            console.log('error', error.message)
        })
    }
}