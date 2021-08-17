//const { fabric } = require("./fabric");
//canvas = document.getElementById('myCanvas');
//ctx = canvas.getContext("2d");
var canvas = new fabric.Canvas('myCanvas')
var blw = 40;
var blh = 40;
var plx = 100;
var ply = 750;
var player_object="";
var blo="";
function player_update(){
    fabric.Image.fromURL("Pose-Thor-PNG.png",function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:plx,
    left:ply,
    });
    canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    blo=Img;
    blo.scaleToWidth(blw);
    blo.scaleToHeight(blh);
    blo.set({
        top:ply,
        left:plx
    });
    canvas.add(blo);
    });
}

window.addEventListener("keydown", keydown);
            function keydown(e){
            
            keyPressed = e.keyCode;
            document.getElementById("key_value").innerHTML = "keyPressed";
            document.getElementById("key_arrow").innerHTML = "";
            document.getElementById("key_value_h4").style.display = "inline-block";
            
                if(keyPressed == '87')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>w</span> key";
                }
            
                if(keyPressed == '66')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>b</span> key";
                }
                if(keyPressed == '71')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>g</span> key";
                }
                if(keyPressed == '76')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>l</span> key";
                }
                if(keyPressed == '84')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>t</span> key";
                }
                if(keyPressed == '82')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>r</span> key";
            new_image('thor_right_hand.png');
                }
                if(keyPressed == '89')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>y</span> key";
                }
                if(keyPressed == '68')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>d</span> key";
                }
                if(keyPressed == '67')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>c</span> key";            
                }
            
                if(keyPressed == '38')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>Up</span> arrow key";
                }
                if(keyPressed == '40')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>Down</span> arrow key";
                }
                if(keyPressed == '37')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>Left</span> arrow key";
                }
                if(keyPressed == '39')
                {
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>Right</span> arrow key";
            Right();
            console.log("Right");
                }
                if(keyPressed == '70'){
            document.getElementById("key_arrow").innerHTML = "You have pressed <span>f</span> key";
            new_image('ironman_face.png');
        console.log("u have pressed f");
        }
            
   
            
            if(e.shiftKey == true)
            {
        document.getElementById("key_arrow").innerHTML = "You have pressed <span>shift</span> key";
        document.getElementById("key_value_h4").style.display = "none";
            }
            if(e.shiftKey == true && keyPressed == '80')
            {
        document.getElementById("key_arrow").innerHTML = "<span>p</span> and <span>shift</span> pressed together  key";
        document.getElementById("key_value_h4").style.display = "none";
            }
            if(e.shiftKey == true && keyPressed == '77')
            {
        document.getElementById("key_arrow").innerHTML = "<span>m</span> and <span>shift</span> pressed together  key";
        document.getElementById("key_value_h4").style.display = "none";
            };
        
        
        };
function Right(){
    if(plx<900){
        plx = plx + blw;
        console.log("Right")
    }
}