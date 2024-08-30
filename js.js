const result = document.getElementById("result");
const chance = document.getElementById("chances");
const submit = document.getElementById("submit");
const guessNum = document.getElementById("guessNum");

const max = 11;
let chances = 0;
let c = 3;
const random = Math.floor(Math.random() * max);

chance.textContent = "You have " + (c) + " chances left.";
submit.onclick = function(){
    const guess = parseInt(document.getElementById("guessNum").value);
   
    if(chances < 3){
        c--;
        chance.textContent = "You have " + (c) + " chances left.";
        
        if(guess === random){
            result.innerHTML = "You Win ! <br>" + "The Guessing number is " + random;
            return;
        } else if(guess > random){
            result.innerHTML = guess + "<br>" +"Your guess is too high";
        } else if(guess < random){
            result.innerHTML = guess +  "<br>" +"Your guess is too low";
        }

        chances++;

        if (chances === 3) {
            result.innerHTML = "You Lose!<br>The random number was " + random;
            chance.textContent = "";
            return;
        }

    }
    guessNum.value = "";
}