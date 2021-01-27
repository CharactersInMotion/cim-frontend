//var h1 = document.createElement("h1");
//h1.innerText= "Characters in Motion";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.font = "20px "
var img = new Image();
img.setAttribute("src","Mama.jpeg");
context.beginPath();
context.arc(100,75,50,0,2*Math.PI);
context.stroke();

let timerStarted = false;
function Countdown(time){
    if(timerStarted){
        return;
    }
    timerStarted = true;
    let currenttime=time
    
    let timerText = document.getElementById("Timer");
    timerText.innerText = currenttime;
    var interval =setInterval(function(){
        currenttime--;
        timerText.innerText = currenttime;
        if(currenttime > 0){

            

        }else{
            timerStarted= false;
            Setscore(1000);
            DrawGlyphscore(67,25,20);
            clearInterval(interval);
        }
    },1000);
}
Countdown(1);

function Setscore(value){
    document.getElementById("Score").innerText = value;
}
Setscore(0);

function DrawGlyphscore(BaseScore,Completion,TimeBonus){
    let canvasWidht = canvas.width/2;
    let height = 50;
    context.textAlign = "center"
    context.lineWidth = 5;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(canvasWidht-200,height-45);
    context.lineTo(canvasWidht-200,height+350);
    context.lineTo(canvasWidht-160,height+320); 
    context.lineTo(canvasWidht-140,height+350);  
    context.lineTo(canvasWidht-120,height+310); 
    context.lineTo(canvasWidht-100,height+350); 
    context.lineTo(canvasWidht-80,height+330); 
    context.lineTo(canvasWidht-60,height+350); 
    context.lineTo(canvasWidht-40,height+310); 
    context.lineTo(canvasWidht-20,height+350); 
    context.lineTo(canvasWidht,height+320); 
    context.lineTo(canvasWidht+20,height+350); 
    context.lineTo(canvasWidht+40,height+340); 
    context.lineTo(canvasWidht+60,height+350); 
    context.lineTo(canvasWidht+80,height+320); 
    context.lineTo(canvasWidht+100,height+350); 
    context.lineTo(canvasWidht+120,height+310); 
    context.lineTo(canvasWidht+140,height+340); 
    context.lineTo(canvasWidht+160,height+330); 
    context.lineTo(canvasWidht+180,height+320);  
    context.lineTo(canvasWidht+200,height+350); 
    context.lineTo(canvasWidht+200,height-45);  
    context.lineTo(canvasWidht-200,height-45); 
    context.stroke();

    
    context.fillText("Glyphscore",canvasWidht, height -10);
    context.fillText("Round 1/2",canvasWidht, height+10);
    
    context.textAlign = "left"
    context.fillText("Basescore:",canvasWidht -80,100);
    context.fillText("Completion:",canvasWidht -80,120);
    context.fillText("Time Bonus:",canvasWidht -80,140);
    context.fillText("Total:",canvasWidht -80,160);


    context.textAlign = "right";
    context.fillText("U+"+BaseScore,canvasWidht +80,100);
    context.fillText("x"+Completion,canvasWidht +80,120);
    context.fillText("x"+TimeBonus,canvasWidht +80,140);
    context.setLineDash ([5]);
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(canvasWidht -80,150);
    context.lineTo(canvasWidht +80,150);
    context.stroke()
    context.fillText(BaseScore * Completion +TimeBonus,canvasWidht +80,160);
    

}


//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value;

//slider.oninput = function() {
//  output.innerHTML = this.value;
//}