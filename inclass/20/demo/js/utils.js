function describeResponseProblem(response, detail) {
  const message = `${response.status} ${response.statusText} from ${response.url}`;
  return detail ? `${message}. ${detail}` : message;
}

function getContentType(response) {
  return response.headers.get('content-type') ?? '';
}

function assertOk(response) {
  if(!response.ok) {
    throw new Error(describeResponseProblem(response));
  }
}

function assertContentType(response, expectedType) {
  const contentType = getContentType(response);
  if(!contentType.includes(expectedType)) {
    const detail = `Expected ${expectedType}, but received ${contentType || 'no content'}.`;
    throw new Error(describeResponseProblem(response, detail));
  }
}

// The async keyword means that whatever is returned is Promise<T>
export async function fetchJson(endpoint) {
  // This example is using async/await
  // TODO: fetch the endpoint.
  // 💫 The HTTP Response is like a "package" or "box" you received
  // from Amazon
  const response = await fetch(endpoint);
  // TODO: check response.ok before reading the body.
  // ✅ The box isn't damaged
  assertOk(response); // validate a http 200 status code
  // TODO: check that the content-type includes application/json.
  // ✅ The address/name is correct
  assertContentType(response, 'application/json');
  // TODO: return response.json().
  // The .json() function takes the payload of the response and
  // converts it from JSON to a JavaScript object
  // ✅ .json() is unpacking the box
  return response.json(); // This method is expecting JSON
}

export async function fetchText(endpoint, expectedType) {
  // TODO: fetch the endpoint.
  const response = await fetch(endpoint);
  // TODO: check response.ok before reading the body.
  assertOk(response);
  // TODO: check the content-type against expectedType.
  assertContentType(response, expectedType);
  // TODO: return response.text().
  return response.text(); // "unpacking" is to get a string
}

export async function fetchBlob(endpoint, expectedType) {
  // TODO: fetch the endpoint.
  const response = await fetch(endpoint);
  // TODO: check response.ok before reading the body.
  assertOk(response);
  // TODO: check the content-type against expectedType.
  assertContentType(response,  expectedType);
  // TODO: return response.blob().
  // Binary Large Object
  return response.blob(); // "unpacking" is to get Binary data
}

export async function sendJson(endpoint, options) {
  // Allow us to do a POST, PUT, PATCH, or DELETE request to
  // the backend server for our fetch() request 
  // TODO: merge method, headers, and JSON body options into a fetch() call.
  // We'll re-package the options to clarify that we are passing
  // (by default) JSON data as the content type
  const fetchOptions = {
    ...options, // spread operator to "unpack" the options
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  };

  // We'll check to see if we need "stringify" the payload
  if (options.body && typeof options.body === 'object') {
    fetchOptions.body = JSON.stringify(options.body);
  }

  const response = await fetch(endpoint, fetchOptions);

  // TODO: reuse the same response.ok and content-type checks.
  assertOk(response);
  assertContentType(response, 'application/json');

  // TODO: return parsed JSON when the API sends JSON back.
  return response.json();
}

export { describeResponseProblem, getContentType };
