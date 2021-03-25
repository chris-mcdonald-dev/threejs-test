document.addEventListener('mousemove', mouseMoveHandler);

const halfOfWindowX = window.innerWidth / 2
const halfOfWindowY = window.innerHeight / 2

const posFromWorldOrigin = {
    X: 0,
    Y: 0,
};

function mouseMoveHandler(event) {
    // Divided by 100 to get percentage of viewport
    posFromWorldOrigin.X = (event.clientX - halfOfWindowX) / 100;
    posFromWorldOrigin.Y = (event.clientY - halfOfWindowY) / 100;
}

export { posFromWorldOrigin };