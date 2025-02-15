/**@type {HTMLCanvasElement} */
let playerState="idle";
const dropDown=document.getElementById('animations');
dropDown.addEventListener('change',function(e){
    playerState=e.target.value;
})
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d')
const canvas_width=canvas.width=600;
const canvas_height=canvas.height=600;

const playerImage=new Image();
playerImage.src='shadow_dog.png';
const spriteWidth=575;
const spriteHeight=523;


const spriteArr=[];
const animationArr=[
    {
        name:"idle",
        frames:7
    },
    {
        name:"jump",
        frames:7
    },
    {
        name:"fall",
        frames:7
    },{
        name:"sprint",
        frames:9
    },{
        name:"dizzy",
        frames:11
    },{
        name:"sit",
        frames:5
    },{
        name:"roll",
        frames:7
    },{
        name:"bite",
        frames:7
    },{
        name:"ko",
        frames:12
    },{
        name:"hit",
        frames:4
    },
];
animationArr.forEach((state,index)=>{
    let frames={
        loc:[],
    }
    for(let j=0;j<state.frames;j++){
        let posx=j*spriteWidth;
        let posy=index*spriteHeight;
        frames.loc.push({x:posx,y:posy});

    }
    spriteArr[state.name]=frames;
});
let gameFrame=0;
const stagger=5;

function animate(){
   
    let position= Math.floor(gameFrame/stagger)% spriteArr[playerState].loc.length;
     let frameX=position*spriteWidth;
     let frameY=spriteArr[playerState].loc[0].y;
     
    
    
    ctx.clearRect(0,0,canvas_width,canvas_height);
    //ctx.fillRect(10,10,90,90);
    
    gameFrame++;
    ctx.drawImage(playerImage,frameX,frameY,
        spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    requestAnimationFrame(animate);
    
    
}
animate();
