var randNUM1=Math.floor(Math.random()*6)+1;
var randNUM2=Math.floor(Math.random()*6)+1;

if(randNUM1>randNUM2)
{
  document.querySelector("h1").innerHTML="PLAYER 1 WINS!"
}
else if(randNUM2>randNUM1)
{
  document.querySelector("h1").innerHTML="PLAYER 2 WINS!"
}
else
{
  document.querySelector("h1").innerHTML="DRAW!"
}


  document.querySelector(".img1").setAttribute("src","images/dice"+randNUM1+".png")

  document.querySelector(".img2").setAttribute("src","images/dice"+randNUM2+".png")
