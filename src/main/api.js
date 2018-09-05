import FetchHelpers from '../fetchhelpers'

export function getParts(){
    return fetch('http://localhost:9001/parts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
      })
      .then(FetchHelpers.handleErrors)
      .then(response => response.json())
      .then((response) => {
        if (response){
            return response
        }
      });
}

export function receivePart(id, qty){
    return fetch(`http://localhost:9001/parts/${id}/receive`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(qty)
      })
      .then(FetchHelpers.handleErrors)
      .then(response => response.json())
      .then((response) => {
        if (response){
            return response
        }
        else {
          console.log('no response')
        }
      });
}

export function consumePart(id, qty){
    return fetch(`http://localhost:9001/parts/${id}/consume`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(qty)
      })
      .then(FetchHelpers.handleErrors)
      .then(response => response.json())
      .then((response) => {
        if (response){
            return response
        }
        else {
          console.log('no response')
        }
      });
}

export function createPart(part){
    return fetch(`http://localhost:9001/parts/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(part)
      })
      .then(FetchHelpers.handleErrors)
      .then(response => response.json())
      .then((response) => {
        if (response){
            return response
        }
        else {
          console.log('no response')
        }
      });
}

export function deletePart(id){
    return fetch(`http://localhost:9001/parts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        }
      })
      .then(FetchHelpers.handleErrors)
      .then(response => response.json())
      .then((response) => {
        if (response){
            return response
        }
        else {
          console.log('no response')
        }
      });
}

export function updatePart(id, part){
    return fetch(`http://localhost:9001/parts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(part)
      })
      .then(FetchHelpers.handleErrors)
      .then(response => response.json())
      .then((response) => {
        if (response){
            return response
        }
        else {
          console.log('no response')
        }
      });
}
