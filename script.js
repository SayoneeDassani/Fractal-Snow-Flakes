const canvas=document.getElementById('canvas1');
//const canvas=document.querySelector('canvas');
const ctx =canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


const maxlevel=5;
const branches=2;
const sides= Math.floor((Math.random()*10) +3 );//generates random whole number between 3 to 13
const spread=(Math.random()*48 )+0.51;//generates number between 0.51 and 0.99 for the spread in angle of growth
// translate pushes the canvas to a certain coordinates in x and y
ctx.translate(canvas.width/2 , canvas.height / 2);
// so we are basically pushing it to the centre

const angle=Math.PI *2 * spread;

//the snowflake is just a a collection of lines from a staring point to an ending point

function drawLine(level)//this function recursively calls itself till the bounding value is reached ie we keep increasing level till its equal to max level
{

if(level> maxlevel) return ;

ctx.strokeStyle = '#fff';
ctx.lineWidth=2;
ctx.beginPath();//will start the drawing
ctx.moveTo(0,0); // pushed it to centre
ctx.lineTo(200,0);

ctx.stroke();//draws from centre

  for(let i=1;i<branches+1; i++)
  {
  	ctx.save();//saves the current canvas position
  	ctx.translate(200* i/(branches+1), 0);
  	ctx.scale(0.5,0.5); // the child branch will be half in length nd width
    ctx.save();

    ctx.rotate(angle);//angle in which the branches grow
    drawLine(level+1);
    ctx.restore();//saves canvas to position of last saved call
    ctx.save();

    
    ctx.rotate(- angle);
    drawLine(level+1);
    ctx.restore();//undo the - angle 

    ctx.restore();//will  undo the undo 
  }
}
//following for loop will draw each branch seperately
for(let i=0;i<sides;i++)
{
drawLine(0);
ctx.rotate(Math.PI * 2 /sides);
}


//drawLine(0);