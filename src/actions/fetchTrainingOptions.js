export function fetchTrainingOptions() {
    return (dispatch) => {
        fetch('http://localhost:5500/api/v1/training_options')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_TRAINING_OPTIONS',
            payload: data
        }))
    }
}