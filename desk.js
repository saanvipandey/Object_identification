img = ""; 

function setup()
{
    canvas = createCanvas(600, 300);
    canvas.position(325, 250);
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 600, 300);
}

function back()
{
    window.location = "index.html";
}