let images = ["dice1.jpg",
"dice2.jpg",
"dice3.jpg",
"dice4.jpg",
"dice5.jpg",
"dice6.jpg"];
let dice = document.querySelectorAll("img");
console.log(dice);

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        console.log(dieOneValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);

        if(dieOneValue == [1]) {
            document.getElementById('result').innerHTML = "hellaaaww?"
        }

    },
    1000
    );

    

}