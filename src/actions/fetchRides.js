export function fetchRides() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/rides')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_RIDES',
            payload: data
        }))
    }
}