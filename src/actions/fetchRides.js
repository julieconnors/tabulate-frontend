export function fetchRides() {
    return (dispatch) => {
        fetch('http://localhost:5500/api/v1/rides')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_RIDES',
            payload: data
        }))
    }
}