const colors = ['blue', 'yellow', 'purple', 'pink', 'green', 'darkblue', 'lightblue', 'lightgreen', 'grey', 'black']

/* for (let i = 1; i <= 3; i++) {
    let box = document.getElementById("box-" + i);
    box.style.background = colors[i - 1];
} */

function changeColor(id) {
    let box = document.getElementById(id);
    box.style.background = colors[Math.round(Math.random() * 10)];
}


function init() {
    const quantity = 13;
    /* let boxes = document.getElementsByClassName("box");

    Object.values(boxes).forEach((item, index) => {
        console.log(item, index);
        console.log(item.id);
        item.onclick = () => changeColor(item.id);
    }) */
    let container = document.getElementById("container");
    let box = document.createElement("div");
    box.className = "box";
    box.id = 'box-1';
    box.innerText = 1;
    container.appendChild(box);

}

init()