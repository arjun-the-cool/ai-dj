accelerant = null;
edd = null;
function preload()
{
    accelerant = loadSound("accelerant.mp3");
    edd = loadSound("edd.webm")
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 300, 300);
}