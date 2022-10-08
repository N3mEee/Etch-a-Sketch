const main = document.querySelector('main');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
let rainbow = false;

button1.addEventListener('click', (e) => {
    createGrid(16);
})
button2.addEventListener('click', (e) => {
    createGrid(32);
})
button3.addEventListener('click', (e) => {
    createGrid(64);
})
button4.addEventListener('click', (e) => {
    deleteGrid();
})
button5.addEventListener('click', (e) => {
    let value = prompt('Please enter a number')
    createGrid(value);
})
button6.addEventListener('click', (e) => {
    clearGrid()
})
button7.addEventListener('click', (e) => {
    rainbow = false;
})
button8.addEventListener('click', (e) => {
    rainbow = true;
})

//create a grid by default
createGrid(16)

function createGrid(value) {
    deleteGrid()
    for (let i = 0; i <= value - 1; i++) {
        for (let j = 0; j <= value - 1; j++) {
            let item = document.createElement('div')
            item.classList.add('item')
            item.setAttribute('style', `width: ${(512 - ((value * 2))) / value + 2}px; height: ${(512 - ((value * 2))) / value + 2}px`)
            main.appendChild(item)
        }
    }
    main.childNodes.forEach(item => {
        item.addEventListener('click', (e) => {
            changeItemColor(item)
        })
    })
}

function clearGrid() {
    if (rainbow) {
        main.childNodes.forEach(item => {
            item.style.backgroundColor = ``;
        })
    } else {
        main.childNodes.forEach(item => {
            item.classList.remove('colored')
        })
    }
}

function deleteGrid() {
    for (let i = main.childNodes.length - 1; i >= 0; i--) {
        main.removeChild(main.childNodes[i])
    }
}
function changeItemColor(item) {
    if (rainbow) {
        item.style.backgroundColor = `rgb(${getRandomRGB()})`

    } else {
        if (item.classList.contains('colored')) {
            item.classList.remove('colored')
        } else {
            item.classList.add('colored')
        }
    }
}

function getRandomRGB() {
    let x = `${Math.floor(Math.random(8) * 255)},${Math.floor(Math.random(8) * 255)},${Math.floor(Math.random(8) * 255)}`
    return x
}