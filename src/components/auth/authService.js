import  endpoints  from '../../config/endpoints.js'

function isLoggedIn () {
    if (localStorage.getItem('token')) {
        return true;
      }
      return false;
}


function logIn (email, password) {
    let credentials =  {
        "email": email,
        "password": password
    }

    let config = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials) // body data type must match "Content-Type" header
      }
    return fetch(endpoints.login, config)
        .then( res => res.json())
        .then (res => {
            if (res.access_token) {
              localStorage.setItem('token', JSON.stringify(res.access_token));
              return res.access_token;
            }
        })

        .catch(e => {
            console.log(e)
        })
}

function logOut () {
    localStorage.removeItem('token');
}


export {
    logIn, logOut
}