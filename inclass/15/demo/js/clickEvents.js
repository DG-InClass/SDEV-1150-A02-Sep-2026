export function setupClickEvents() {
  // TODO: Select #btn-toggle, #btn-message, and #message.
  const btnToggle = document.querySelector('#btn-toggle');
  const btnMessage = document.getElementById('btn-message');

  const message = document.querySelector('#message');

  if (!btnToggle || !btnMessage || !message) {
    console.log('Cannot set up click events');
    return;
  }

  // TODO: Add click listeners that update the page.
  btnToggle.addEventListener('click', function() {
    document.body.classList.toggle('highlight'); // Toggle a CSS class
    const isHighlighted = document.body.classList.contains('highlight');
    btnToggle.textContent = isHighlighted ? 'Highlight is ON' : 'Hightlight is OFF';
  });

  btnMessage.addEventListener('click', function() {
    const timeString = new Date().toLocaleTimeString();
    message.textContent = `Message updated at ${timeString}`;
  });
}
