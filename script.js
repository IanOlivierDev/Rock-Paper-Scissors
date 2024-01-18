let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerHand = document.querySelector("#playerHand");
let compHand = document.querySelector("#compHand");
let result = document.querySelector("#result");
let score = document.querySelector("#score");

let countDown = document.querySelector("#countDown");
let time = 0;


let randHand = ()=>{
    return Math.floor(Math.random() * 3) + 1;
}

//Hand Chosen logic
//1 = Rock
//2 = Paper
//3 = Rock
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
function loadingAnimation(){
    setTimeout(() => {
        rock.classList.add("buttonAnimation");
        setTimeout(() => {
            rock.classList.remove("buttonAnimation");
            paper.classList.add("buttonAnimation");
            setTimeout(() => {
                paper.classList.remove("buttonAnimation");
                scissors.classList.add("buttonAnimation");
                setTimeout(()=>{
                    scissors.classList.remove("buttonAnimation");                        
                }, 700);
            }, 700);
        }, 700);
    }, 900); 
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
            score.textContent = "LOSER : Paper beats Your Rock";
            result.style.display = "block flex";
            playerHand.style.display = "none";
        }

        else{
            score.textContent = "Winner : Rock beats CPU Scissors";
            result.style.display = "block flex";
            playerHand.style.display = "none";
        }
    }, 3000);

    timerFunction();
    loadingAnimation();
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
            score.textContent = "WINNER : Paper Beats CPU Rock";
            playerHand.style.display = "none";
            compHand.textContent = "Computers Choice";
        }
        else if (compHand.textContent === "Paper"){
            score.textContent = "TIE : You both chose Paper";
            result.style.display = "block flex";
            playerHand.style.display = "none";
        }

        else{
            score.textContent = "LOSER : Scissors beat your Paper";
            result.style.display = "block flex";
            playerHand.style.display = "none";
        }
    }, 3000);

    timerFunction();
    loadingAnimation();
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
            score.textContent = "Winner : Scissors beats CPU Paper";
            result.style.display = "block flex";
            playerHand.style.display = "none";
        }
        else{
            score.textContent = "Loser : Rock beats Your Scissors";
            result.style.display = "block flex";
            playerHand.style.display = "none";
        }
    }, 3000);

    timerFunction();
    loadingAnimation();
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











