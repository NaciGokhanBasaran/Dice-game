var randomN1 = Math.floor(Math.random() * 6) + 1; 
var randomImageSource =  randomN1 + ".png";
var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);


var randomN2 = Math.floor(Math.random() * 6) + 1; 
var randomImageSource = randomN2 + ".png";
var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource);


if(randomN1>randomN2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomN1<randomN2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "DRAW !";
}
