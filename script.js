let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerHand = document.querySelector("#playerHand");
let compHand = document.querySelector("#compHand");
let result = document.querySelector("#result");
let score = document.querySelector("#score");

let countDown = document.querySelector("#countDown");
let time = 0;

//Score keeper logic
let playerScoreKeeper = 0;
let cpuScoreKeeper = 0;
let playerScore = document.querySelector("#playerScore");
let cpuScore = document.querySelector("#cpuScore");
let scoreBlock = document.querySelector("#scoreKeeper");



//Hand Chosen logic
//1 = Rock
//2 = Paper
//3 = Rock

let randHand = ()=>{
    return Math.floor(Math.random() * 3) + 1;
}
function randCompHand(){
    if (randHand() === 1){
        console.log("CPU rock");
        compHand.textContent = "Rock";
        setTimeout(() => {
            rock.classList.add("buttonAnimation");
        }, 3100);
    }
    else if(randHand() === 2){
        console.log("CPU paper");
        compHand.textContent = "Paper";
        setTimeout(() => {
            paper.classList.add("buttonAnimation");
        }, 3100);
    }
    else{
        console.log("CPU scissors");
        compHand.textContent = "Scissors";
        setTimeout(() => {
            scissors.classList.add("buttonAnimation");         
        }, 3100);
    }
    
}

//Timer Function
function timerFunction(){
    time = 2;
    let timer = setInterval(() => {
        countDown.textContent = time;
        if (time <= 0)
        {
            clearInterval(timer);
            countDown.textContent = "3";
            countDown.style.display = "none";            
        }
        time -= 1;
    }, 1000);
}

//Block loading animation 
async function load(time, y, x){
    return setTimeout(() => {
        y.classList.add("buttonAnimation");
        x.classList.remove("buttonAnimation");
    }, time);
}

async function executeLoad(){
    await load(100, rock, scissors);
    await load(1000, paper, rock);
    await load(2000, scissors, paper);
    await load(3000, scissors, scissors);
}


//Rock button selector
rock.addEventListener('click', function(event){
    playerHand.textContent = "Player Selected : Rock";
    console.log("rock");

    //No hover after button is pressed
    paper.classList.add("noHover");
    rock.classList.add("noHover");
    scissors.classList.add("noHover");

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;  
    countDown.style.display = "block";
    
    randCompHand();

    //Results logic
    setTimeout(() => {
        if (compHand.textContent === "Rock")
        {
            result.style.display = "block flex";
            score.textContent = "TIE : You both chose Rock";
            playerHand.style.display = "none";
            compHand.textContent = "Computers Choice";
        }
        else if (compHand.textContent === "Paper"){
            score.textContent = "LOSER : CPU Paper beats Your Rock";
            result.style.display = "block flex";
            playerHand.style.display = "none";
            cpuScoreKeeper++;
            console.log("cpu score: " + cpuScoreKeeper);
            cpuScore.textContent = cpuScoreKeeper;
        }
        else{
            score.textContent = "Winner : Your Rock beats CPU Scissors";
            result.style.display = "block flex";
            playerHand.style.display = "none";
            playerScoreKeeper ++;
            console.log("player score: " + playerScoreKeeper);
            playerScore.textContent = playerScoreKeeper;
        }
        scoreBlock.style.display = "flex";
    }, 3000);

    timerFunction();
    executeLoad();
});




//Paper button selector
paper.addEventListener('click', function(event){
    document.querySelector("h2").textContent = "Player Selected : Paper";
    console.log("paper");

    //No hover after button is pressed
    paper.classList.add("noHover");
    rock.classList.add("noHover");
    scissors.classList.add("noHover");

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true; 
    countDown.style.display = "block";

    randCompHand();

    setTimeout(() => {
        if (compHand.textContent === "Rock")
        {
            result.style.display = "block flex";
            score.textContent = "WINNER : Your Paper Beats CPU Rock";
            playerHand.style.display = "none";
            compHand.textContent = "Computers Choice";
            playerScoreKeeper ++;
            console.log("player score: " + playerScoreKeeper);
            playerScore.textContent = playerScoreKeeper;
        }
        else if (compHand.textContent === "Paper"){
            score.textContent = "TIE : You both chose Paper";
            result.style.display = "block flex";
            playerHand.style.display = "none";
        }
        else{
            score.textContent = "LOSER : CPU Scissors beat your Paper";
            result.style.display = "block flex";
            playerHand.style.display = "none";
            cpuScoreKeeper++;
            console.log("cpu score: " + cpuScoreKeeper);
            cpuScore.textContent = cpuScoreKeeper;
        }
        scoreBlock.style.display = "flex";
    }, 3000);

    timerFunction();
    executeLoad();
});




//Scissors button selector
scissors.addEventListener('click', function(event){
    document.querySelector("h2").textContent = "Player Selected : Scissors";
    console.log("scissors");

    //No hover after button is pressed
    paper.classList.add("noHover");
    rock.classList.add("noHover");
    scissors.classList.add("noHover");

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true; 

    countDown.style.display = "block";

    randCompHand();

    setTimeout(() => {
        if (compHand.textContent === "Scissors")
        {
            result.style.display = "block flex";
            score.textContent = "TIE : You both chose Scissors";
            playerHand.style.display = "none";
            compHand.textContent = "Computers Choice";
        }
        else if (compHand.textContent === "Paper"){
            score.textContent = "Winner : Your Scissors beats CPU Paper";
            result.style.display = "block flex";
            playerHand.style.display = "none";
            playerScoreKeeper ++;
            console.log("player score: " + playerScoreKeeper);
            playerScore.textContent = playerScoreKeeper;
        }
        else{
            score.textContent = "Loser : CPU Rock beats Your Scissors";
            result.style.display = "block flex";
            playerHand.style.display = "none";
            cpuScoreKeeper++;
            console.log("cpu score: " + cpuScoreKeeper);
            cpuScore.textContent = cpuScoreKeeper;
        }
        scoreBlock.style.display = "flex";
    }, 3000);

    timerFunction();
    executeLoad();
});

//Play Again Reset
let playAgain = document.querySelector("#playAgain");
playAgain.addEventListener("click", function(event){
    result.style.display = "none";
    compHand.textContent = "Computers Choice";
    playerHand.textContent = "Choose a Hand";
    playerHand.style.display = "block";
    paper.disabled = false;
    rock.disabled = false;
    scissors.disabled = false;  
    time = 3;
    console.log(time);

    //Re-enable hover selection
    paper.classList.remove("noHover");
    rock.classList.remove("noHover");
    scissors.classList.remove("noHover");

    //CPU choice clear
    rock.classList.remove("buttonAnimation");
    paper.classList.remove("buttonAnimation");
    scissors.classList.remove("buttonAnimation");
});