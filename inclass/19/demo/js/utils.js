export function fetchJsonData(endpoint) {
  // TODO: Use fetch(endpoint), then pass the response to handleResponse().
  return fetch(endpoint).then(handleResponse);
}

function handleResponse(response) {
  // TODO: Check response.ok.
  if (!response.ok) {
    // TODO: Throw an Error when the server response failed.
    const message = `Server responsed with ${response.status} (${response.statusText})`;
    throw new Error(message);
  }

  // TODO: Return response.json().
  return response.json();
}

export async function postData(endpoint, payload) {
  // TODO: Use fetch() with method, headers, and JSON.stringify(payload).
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  // TODO: Return the parsed response by reusing handleResponse().
  return handleResponse(response);
}
