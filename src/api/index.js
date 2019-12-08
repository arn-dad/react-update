const URL = 'https://it-blog-posts.herokuapp.com/api/'
const defaultQuery = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
}
 
export default function api(ep = '', query = null, options = {}) {
  const parsedQuery = query ? JSON.stringify(query) : ''
  return fetch(`${URL}${ep}?filter=${parsedQuery}`, {
    ...defaultQuery,
    ...options
  }).then((response) => {
    if (response.status !== 200 && !response.ok) {
      throw new Error('something went wrong please try again later');
    }
    return response.json()
  })
}