let score = 0;

function updateScore() {
    let showScore = document.body.getElementsByClassName("point")[0];
    showScore.textContent = score;
}

function onClickDuck(event) {
    console.log("click " + event.target.id);
    score += 10;
    updateScore();
    event.target.removeEventListener("click", onClickDuck);
}


function createDucks(cant, container, tag) {

    for (let i = 0; i < cant; i++) {
        let temporal = document.createElement("div");
        temporal.classList.add("duck");
        temporal.id = tag + i;
        temporal.addEventListener("click", onClickDuck);

        container.appendChild(temporal);
        let containerWidth = container.style.width;
        container.style.width = (i + 1) * 200 + "px";
    }

}

function moveDucksTop() {
    let position = document.body.getElementsByClassName("top-ducks")[0];
    gsap.to(position, {
        duration: 30,
        repeat: 3,
        left: -3000
    });
}

function moveDucksBottom() {
    let position = document.body.getElementsByClassName("bottom-ducks")[0];
    gsap.to(position, {
        duration: 30,
        repeat: 3,
        left: -3500
    });
}

document.addEventListener('DOMContentLoaded', (event) => {

    moveDucksTop();
    moveDucksBottom();
    updateScore();

    let topDucks = document.body.getElementsByClassName("top-ducks")[0];
    createDucks(100, topDucks, "top");

    let bottomDucks = document.body.getElementsByClassName("bottom-ducks")[0];
    createDucks(100, bottomDucks, "bottom");

});

