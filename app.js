// Toglogchiin eeljiig hadgalah huvisagch, negduger toglogch 0, hoyordugaar toglogch 1 

var activePlayer = 1;

// Toglogchiin tsugluulsan onoog hadglahah huvisagch

var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch

var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6 hurtel too sanamsarguigeer ugnu


// id="score-0" player 1
// document.querySelector('#score-0').textContent = dice;

// player 2
// document.querySelector('#score-1').innerHTML = "<em>Yes</em>";

//Programm ehlehed beltey
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

document.querySelector('.btn-roll').addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src="dice-" + diceNumber + ".png";
});

