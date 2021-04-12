export function fetchHorses() {
    return (dispatch) => {
        fetch('http://localhost:5500/api/v1/horses')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_HORSES',
            payload: data
        }))
    }
}
