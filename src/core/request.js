import 'whatwg-fetch'
// const baseApiUrl = '/api/v0'

export default class Request {
  static token() {
    return '';
  }

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': this.token(),
      'HTTP_X_CSRFTOKEN': this.token(),
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'get')
  }

  static post(route, params) {
    return this.xhr(route, params, 'post')
  }

  static put(route) {
    return this.xhr(route, null, 'put');
  }

  static xhr(route, params = null, verb) {
    let defaults = {
      method: verb,
      credentials: 'include',
      headers: this.headers()
    }

    let options = {}

    if (verb === 'post') {
      options = Object.assign({}, defaults, { body: JSON.stringify(params) })
    } else {
      options = Object.assign({}, defaults)
    }

    return fetch(`${route}`, options)
      .then(response => response.json())
      .catch(function handleError(error) {
        console.log(`Error: ${error}`);
      });
  }
}