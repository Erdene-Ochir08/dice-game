// Toglogchiin eeljiig hadgalah huvisagch, negduger toglogch 0, hoyordugaar toglogch 1 

var activePlayer = 0;

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
// Shoog shideh eventListener
document.querySelector('.btn-roll').addEventListener("click", function(){
    // 1-6 dotorh sanamsargui toog gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";
    //Buusan sanamsargui toond hargalzah toonii zurgiig web deer gargaj irne
    diceDom.src="dice-" + diceNumber + ".png";
    //Buusan too n 1ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne
    if(diceNumber !== 1){
        //1-ees yalgaatai too buulaa. Buusan toog toglogchid nemne
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        //Vgui bol idevhtei idevhtei toglogchiin 1 bolgo
        //Ene toglogchiin eeljin deer tsugluulsan onoog 0 bolgo
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        //1 buusan bol toglogchiin eeljiig ene hesegt solij ugnu
        //Herev idevhtei toglogch n 0 baival idevhtei toglogchiin 1 bolgo
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //Ulaan tsegiig shiljvvleh 
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
        //Shoog tur alga bolgono
        diceDom.style.display = "none";
        // if(activePlayer === 0){
        //     activePlayer = 1;
        // }else{
        //     activePlayer = 0;
        // }
    }


});

