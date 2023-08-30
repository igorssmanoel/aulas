const colors = ['blue', 'yellow', 'purple', 'pink', 'green', 'darkblue', 'lightblue', 'lightgreen', 'grey', 'black']

for (let i = 1; i <= 3; i++) {
    let box = document.getElementById("box-" + i);
    box.style.background = colors[i - 1];
}

function changeColor(id) {
    let box = document.getElementById(id);
    box.style.background = colors[Math.round(Math.random() * 10)];
}


function init() {
    let boxes = document.getElementsByClassName("box");

    Object.values(boxes).forEach((item, index) => {
        console.log(item, index);
        console.log(item.id);
        item.onclick = () => changeColor(item.id);
    })
}

init()