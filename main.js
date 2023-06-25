function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video, 0, 0, 640, 480);
fill("red");
circle(50,50,80);
circle(600,50,80);
circle(50,400,80);
circle(600,400,80);

fill("green");
rect(80,40,500,20);
rect(550,40,20,500);
rect(40, 80, 20,500);
rect(50,380,500,20);
}

function take_snapshot(){
save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

