const container = document.querySelector(".container");
for (i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add('heart');
    container.appendChild(div);
}
function aniHearts(){
    anime({
        targets: ".heart",
        translateX: ()=>{
            return anime.random(-1000,1000);
        },
        translateY: ()=>{
            return anime.random(-500,500);
        },
        scale: ()=>{
            return anime.random(1,6);
        },
        rotate:45,
        easing:'easeInOutBack',
        duration:2000,
        delay: anime.stagger(10),
        complete:aniHearts
    })
}
aniHearts();