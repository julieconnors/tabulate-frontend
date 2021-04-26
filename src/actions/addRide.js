export function addRide(data) {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/rides', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(ride => dispatch({ type: 'ADD_RIDE', payload: ride }))
    }
}