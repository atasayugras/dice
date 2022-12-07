var rNum1 = Math.floor((Math.random()*6)) + 1;
var rNum2 = Math.floor((Math.random()*6)) + 1;

var rDiceImgSrc1 = "/dice/images/" + rNum1 + ".png";
var rDiceImgSrc2 = "/dice/images/" + rNum2 + ".png";

$("img:first").attr("src", rDiceImgSrc1);
$("img:last").attr("src", rDiceImgSrc2);

if (rNum1 > rNum2){
    $("h1").text("Player 1 Wins");
} else if (rNum2 > rNum1){
    $("h1").text("Player 2 Wins");
} else{
    $("h1").text("It's a draw! ");
}
