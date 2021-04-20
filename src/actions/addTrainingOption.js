export const addTrainingOption = (data) => {

    return (dispatch) => {
        fetch('http://localhost:5500/api/v1/training_options', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(option => dispatch({ type: 'ADD_TRAINING_OPTION', payload: option }))
        .catch(error => {
            console.log('error', error.message)
        })
    }
}