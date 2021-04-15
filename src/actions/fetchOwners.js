export function fetchOwners() {
    fetch('http://localhost:5500/api/v1/owners')
    .then(res => res.json())
    .then(data => dispatchEvent({
        type: 'FETCH_OWNERS',
        payload: data
    }))
}