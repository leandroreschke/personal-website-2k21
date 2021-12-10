
import config from '../AppConfig'

export const get = async (endpoint, params, header = {}, signal) => {
  if (localStorage.token !== undefined && localStorage.token !== 'undefined' && localStorage.token !== '') {
    header.Authorization = 'Bearer ' + localStorage.token;
  }else if(sessionStorage.token !== undefined && sessionStorage.token !== 'undefined' && sessionStorage.token !== ''){
    header.Authorization = 'Bearer ' + sessionStorage.token;
  }    
  
  const url = config.baseUrl + endpoint;
  params = new URLSearchParams(params).toString(); 
  return fetch(url + (params !== '' ? '?' + params : '' ), {
    signal,
    method: 'GET', 
    headers: header,
  }).then((response) => {
    if (!response.ok) {
      let err = new Error("HTTP status code: " + response.status)
      err.response = response
      err.status = response.status
      throw err
    }
    return response.json()
  })
  
}

export const post = async (endpoint, data, header = {}, signal) => {
  if (localStorage.token !== undefined && localStorage.token !== 'undefined' && localStorage.token !== '') {
    header.Authorization = 'Bearer ' + localStorage.token;
  }
  else if(sessionStorage.token !== undefined && sessionStorage.token !== 'undefined' && sessionStorage.token !== ''){
    header.Authorization = 'Bearer ' + sessionStorage.token;
  }  

  const url = config.baseUrl + endpoint;
  return fetch(url, {
    signal,
    method: 'POST', // or 'PUT'
    headers: header,
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      let err = new Error("HTTP status code: " + response.status)
      err.response = response
      err.status = response.status
      throw err
    }
    return response.json()
  })
}

export const put = async (endpoint, data, header = {}, signal) => {
  if (localStorage.token !== undefined && localStorage.token !== 'undefined' && localStorage.token !== '') {
    header.Authorization = 'Bearer ' + localStorage.token;
  }
  else if(sessionStorage.token !== undefined && sessionStorage.token !== 'undefined' && sessionStorage.token !== ''){
    header.Authorization = 'Bearer ' + sessionStorage.token;
  }  

  const url = config.baseUrl + endpoint;
  return fetch(url, {
    signal,
    method: 'PUT', // or 'PUT'
    headers: header,
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      let err = new Error("HTTP status code: " + response.status)
      err.response = response
      err.status = response.status
      throw err
    }
    return response.json()
  })
}
