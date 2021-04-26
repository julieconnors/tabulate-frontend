export function addHorse(data) {
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