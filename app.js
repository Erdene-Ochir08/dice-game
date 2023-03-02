// Toglogchiin eeljiig hadgalah huvisagch, negduger toglogch 0, hoyordugaar toglogch 1 

var activePlayer = 1;

// Toglogchiin tsugluulsan onoog hadglahah huvisagch

var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch

var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6 hurtel too sanamsarguigeer ugnu

var dice = Math.floor(Math.random() * 6) + 1;

// id="score-0" player 1
// document.querySelector('#score-0').textContent = dice;

// player 2
// document.querySelector('#score-1').innerHTML = "<em>Yes</em>";
//Programm ehlehed beltey

document.querySelector('.dice').style.display = "none";
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

console.log("Shoo " +  dice);