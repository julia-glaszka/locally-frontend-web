function isLoggedIn () {
    if (localStorage.getItem('token')) {
        return true;
      }
      return false;
}


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


export {isLoggedIn, getToken, getAuthHeader}