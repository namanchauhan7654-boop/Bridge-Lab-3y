// Q7: Track pointer coordinates and place a dot on double-click.
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", event => {
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", event => {
    const boxRectangle = trackingBox.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "dot";

    // Convert viewport coordinates to positions inside the tracking box.
    dot.style.left = `${event.clientX - boxRectangle.left}px`;
    dot.style.top = `${event.clientY - boxRectangle.top}px`;
    trackingBox.appendChild(dot);
});
