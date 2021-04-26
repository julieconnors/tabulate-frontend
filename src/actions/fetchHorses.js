export function fetchHorses() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/horses')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_HORSES',
            payload: data
        }))
    }
}
