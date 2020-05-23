export default async function get(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(e => []);
}
