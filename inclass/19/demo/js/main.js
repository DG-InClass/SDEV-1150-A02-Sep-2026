import { fetchJsonData, postData } from './utils.js';

const loadButton = document.querySelector('#load-bodies');
const addForm = document.querySelector('#add-body');
const bodyList = document.querySelector('#body-list');
const statusMessage = document.querySelector('#status-message');

const endpoint = 'http://localhost:3000/bodies';

function showStatus(message, type = 'info') {
  statusMessage.textContent = message;
  statusMessage.dataset.status = type;
}

function renderBodies(bodies) {
  // TODO: Clear the current list.
  bodyList.replaceChildren(); // replace all the stuff inside the <ul> with nothing

  bodies.forEach((body) => {
    // TODO: Create and append one <li> for each body.
    const item = document.createElement('li'); // create a <li> fragment

    // TODO: Include the thumbnail image for each body.
    const image = document.createElement('img');
    image.src = `http://localhost:3000/${body.image}`;
    image.alt = body.name;

    const span = document.createElement('span');
    span.textContent = `${body.name} - ${body.category} - ${body.orbitalPeriod}`;


    item.append(image, span);
    bodyList.append(item);
  })
}

function loadHandler() {
  // TODO: Show a loading message.
  showStatus('Loading bodies...');
  bodyList.innerHTML = '<li>Loading....</li>';

  // TODO: Call fetchJsonData(endpoint).
  fetchJsonData(endpoint)
    .then((bodies) => {
      // TODO: Render bodies on success.
      renderBodies(bodies);
      showStatus(`Loaded ${bodies.length} celestial bodies.`, 'success');
    })
    .catch((error) => {
      // TODO: Show a user-facing error on failure.
      showStatus(`Error: ${error.message}`, 'error');
    });
}

async function submitHandler(event) {
  event.preventDefault();

  // TODO: Collect form values with FormData.
  const form = event.target; // <form>
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  // TODO: POST the body, reset the form, and reload the list.
  postData(endpoint, payload).then((result)=> {
    form.reset();
    showStatus('New celestial body added', 'success');
    loadHandler(); // since this does a fetch to get the data again
  }).catch((error) => {
    // TODO: Show a user-facing error on failure.
    showStatus(`Error: ${error.message}`, 'error');
  });
}

loadButton.addEventListener('click', loadHandler);
addForm.addEventListener('submit', submitHandler);
