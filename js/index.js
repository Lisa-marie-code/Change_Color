let colors = ["red","yellow","green","violet"];
let myCol = document.getElementById("colBtn");
let body = document.querySelector("body");

body.style.backgroundColor = "pink";
myCol.addEventListener('click',altColor)

function altColor (){

    // let index = parseInt((Math.random()*10)%4) ;
    let index = parseInt((Math.random()*colors.length)) ;
    let color = colors[index] ;
    body.style.backgroundColor = color;
    
}



