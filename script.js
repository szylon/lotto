function render(list) {
    const $container = document.querySelector("#container");
    list.forEach(function (item) {
        const template = `<span>${item}</span>`;
        $container.innerHTML += template;
    })
    //$container.innerHTML = list.join(' ');
}

function builtArrayWithRandoms(list) {
    const from = 1;
    const to = 80;
    const size = 6;

    for (let i = 0; i < size; i++) {
        const rand = Math.round(Math.random() * (from - to) + to);
        list.push(rand);
    }
}

function setUp() {
    const numbers = [];
    builtArrayWithRandoms(numbers);
    render(numbers);
}


window.addEventListener('DOMContentLoaded', setUp);