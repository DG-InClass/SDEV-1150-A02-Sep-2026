export function setupHoverCard() {
  // TODO: Select #hover-card and #hover-status.
  const hoverCard = document.querySelector('#hover-card');
  const hoverStatus = document.querySelector('#hover-status');

  if (!hoverCard || !hoverStatus) {
    // We're probably not on the index.html page
    return;
  }

  // TODO: Add mouseover and mouseout listeners.
  hoverCard.addEventListener('mouseover', function (evt) {
    console.log(evt);
    hoverStatus.textContent = 'Status: Hovering';
    hoverStatus.textContent += ` ${evt.screenX} ${evt.screenY}`;
  });

  hoverCard.addEventListener('mouseout', function () {
    hoverStatus.textContent = 'Status: Not hovering';
  });
}
