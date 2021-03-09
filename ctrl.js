let ball = document.getElementById("img");
ball.style.width = "75px";
ball.style.height = "75px";
ball.style.position = "relative";
ball.style.left = "0px";
ball.style.top = "0px";
function move() {
    ball.style.left = `${parseInt(ball.style.left) + 2}px`;
}
window.addEventListener("click", move);