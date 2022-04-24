import axios from 'axios';




if (typeof window !== 'undefined') {
  // You now have access to `window`
  if (localStorage.getItem('accessToken')) {
    axios.defaults.headers.common['accessToken'] = localStorage.getItem('accessToken');
  }
}
axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Purpose of this,  if the api is down for time being,
//  and  we need to continue our development work


/* AUTH */

export async function REGISTRATION(cred) {
  try {
    let result = await axios.post('/register', cred);
    console.log("result", result);

    return result;
  } catch (error) {
    console.error('Error', error);

    return error;
  }
}

export async function LOGIN(cred) {
  try {
    let result = await axios.post('/login', cred);
    return result;
  } catch (error) {
    return error
  }
}


