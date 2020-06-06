import { getAuthHeader } from '../components/auth'

export default async function get(url) {
  console.log(getAuthHeader())
  const requestOptions = {
    method: 'GET',
    headers: getAuthHeader()
  }
  return fetch(url, requestOptions)
    .then(res => res.json())
    .catch(e => []);
}
