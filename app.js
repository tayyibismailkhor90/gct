let dino = document.querySelector(".dino")
let gameOver =document.querySelector(".gameover")
let zebra = document.querySelector(".obstacle")
let score = document.querySelector("#score")
let reset = document.querySelector(".reset")
let a = 0;
setInterval(() => {
    a++;
    score.innerHTML=a
}, 1000);



document.addEventListener("keydown",(e)=>{
    console.log(e.keyCode);
    if (e.keyCode===38) {
        dino.style.bottom="350px" 
    } else {
        
    }
    setTimeout(()=>{
        dino.style.bottom="30px" 
    },700);

});

    

document.addEventListener("keydown",(e)=>{
    console.log(e.keyCode);
    if (e.keyCode===39) {
        dino.style.left="250px" 
    } else {
       
    }
   

});
document.addEventListener("keydown",(e)=>{
    console.log(e.keyCode);
    if (e.keyCode===37) {
        dino.style.left="-10px" 
    } else {
       
    }
   

});



//;ljklnkjghjv
setInterval(() => {
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));
    ox = parseInt(window.getComputedStyle(zebra,null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(zebra,null).getPropertyValue("top"));

offsetX = Math.abs(dx-ox);
offsetY = Math.abs(dy-oy);


if ( offsetX < 93 && offsetY < 52) {
   gameOver.style.maxWidth = "fit-content"
  zebra.style.animation= "none";

}


}, 100);

//ekg;mvnjgbjvbdjfb hjvf

reset.addEventListener("click",()=>{
    window.location.reload();
});


