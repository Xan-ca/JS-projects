/**@type {HTMLCanvasElement} */
const canvas=document.getElementById("canvas2");
const ctx=canvas.getContext('2d');
const canvas_width=canvas.width=800;
const canvas_height=canvas.height=700;
const background_width=2400;
let gameSpeed=5;
const dropDown= document.getElementById('slider');
const showspeed= document.getElementById('slide');
showspeed.innerHTML=gameSpeed;

dropDown.addEventListener('change',function(e){
    gameSpeed=e.target.value*0.5;
    showspeed.innerHTML=gameSpeed;
})

const layer1=new Image();
layer1.src='assets/layer-1.png'
const layer2=new Image();
layer2.src='assets/layer-2.png'
const layer3=new Image();
layer3.src='assets/layer-3.png'
const layer4=new Image();
layer4.src='assets/layer-4.png'
const layer5=new Image();
layer5.src='assets/layer-5.png'


let i=0;
class layer{
    constructor(image,speedModifier){
        this.x=0;
        this.y=0;
        this.width=2400;
        this.height=700;
        this.x2=this.width;
        this.image=image;
        this.speedModifier=speedModifier;
        this.speed=speedModifier*gameSpeed;
    }
    update(){
        this.speed=this.speedModifier*gameSpeed;
        if(this.x<= -this.width){
            this.x=this.width+this.x2-this.speed;
        }
        if(this.x2<= -this.width){
            this.x2=this.width+this.x-this.speed;
        }
        this.x=Math.floor(this.x-this.speed);
        this.x2=Math.floor(this.x2-this.speed);
    }
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.x2,this.y,this.width,this.height);
        this.update();
    }
}
const layer_1=new layer(layer1,0.2);
const layer_2=new layer(layer2,0.4);
const layer_3=new layer(layer3,0.8);
const layer_4=new layer(layer4,1);
const layer_5=new layer(layer5,1.5);
const layers_all=[layer_1,layer_2,layer_3,layer_4,layer_5];
function animate(){
    ctx.clearRect(0,0,canvas_width,canvas_height);
    layers_all.forEach((l,index)=>{
        layers_all[index].draw();
    });
    requestAnimationFrame(animate);
  

}
animate();