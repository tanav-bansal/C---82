canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

width_of_line = 2;

var mouse_event = "empty";

var last_position_of_X, last_position_of_Y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_event = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    mouse_event = "mousemove";

    current_postionX = e.clientX - canvas.offsetLeft;
    current_postionY = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_X, last_position_of_Y);
        console.log(last_position_of_X, last_position_of_Y);
        ctx.lineTo(current_postionX, current_postionY);
        console.log(current_postionX, current_postionY);
        ctx.stroke();
    }
    last_position_of_X = current_postionX;
    last_position_of_Y = current_postionY;
}