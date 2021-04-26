export function fetchOwners() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/owners')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_OWNERS',
            payload: data
        }))
    }
    
}