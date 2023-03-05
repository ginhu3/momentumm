const colors = [
    '#e6d7d9',
    '#e6c4be',
    '#ce8f8b',
    '#917b77',
    '#a29779',
    '#dcd6cf',
    '#b2c4b9',
    '#d7cfde',
    '#d9c6bb',
    '#e9bfb4',
];

const bttn = document.querySelector('#bttn');

function bgColorChanger() {
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    const body = document.querySelector('body');

    body.style.background = chosenColor;
}

bttn.addEventListener('click', bgColorChanger);
