export function fetchServices() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/services')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_SERVICES',
            payload: data
        }))
    }
}