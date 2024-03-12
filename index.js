var random=Math.random()
var randomNumber=random*6
var randomNumber1=Math.floor(randomNumber)+1
var link="images/dice"+randomNumber1+".png"
document.querySelector("img").setAttribute("src",link)


var randomm=Math.random()
var randomNumberr=randomm*6
var randomNumber2=Math.floor(randomNumberr)+1
var link="images/dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",link)

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 won"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}