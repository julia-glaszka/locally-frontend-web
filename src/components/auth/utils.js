function getToken () {
    return JSON.parse(localStorage.getItem('token'))
}

function getAuthHeader () {
    const token = getToken();
    if (token) {
        return { 'Authorization': `Bearer ${token}`};
    } else {
        return {};
    }
}


export {getAuthHeader}