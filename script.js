// Use 🧱 instead of 🪨 for windows 10
const weaponsList = [rock = '🪨', paper = '📜', scissors = '✂️'];

//Adding bruh sound to help
document.querySelector(".help").addEventListener('click',()=> {
    const bruh= document.getElementById("bruh");
    bruh.currentTime =0;
    bruh.play();
} )

//Adding event listner for each weapon buttons and keypress//
document.querySelector(".weapons").childNodes.forEach((element) => {
    element.addEventListener('click',humanChosen)
});
document.addEventListener('keypress',humanChosen);


function humanChosen(event){
    //For getting hummanChoice from keypress
    let humanChoice;
    if(event.type==="keypress"){
        if(event.repeat===true){return}
        if(event.key==="Enter"){return}
        const keys=['R', 'P', 'S'];
        let keyPress=event.key.toUpperCase();
        for(let i=0;i<3;i++){
            if(keyPress===keys[i]){
                humanChoice = weaponsList[i]; 
            }
        }
        if(humanChoice===undefined){
            const uh= document.getElementById("uh");
            uh.currentTime =0;
            uh.play();
            return;
        }
    }
    else {
        humanChoice=event.target.innerHTML;
    }
    
        document.querySelector("#human-hand").innerHTML = humanChoice;
        if(humanChoice!==scissors){
            document.getElementById("human-hand").style.transform="none";
        }
        else document.getElementById("human-hand").style.transform="scaleX(-1) rotate(90deg)";
        keepScore(humanChoice)
}

function whoWon(humanChoice,computerChoice){
    const humanWon = "Human wins!!!";
    const computerWon = "Computer wins!!!";
    const tie = "It's a tie!";
    
    if(humanChoice === computerChoice) {
        return tie;
    }
    switch(humanChoice) {
        case rock: return computerChoice === scissors ? humanWon : computerWon;
        case paper: return computerChoice === rock ? humanWon : computerWon;
        case scissors: return computerChoice === paper ? humanWon : computerWon;
    }
}

function computerChosen(){
    const computerChoice= weaponsList[Math.floor(Math.random()*3)];
    document.querySelector("#computer-hand").innerHTML = computerChoice;
    if (computerChoice !==scissors){
        document.querySelector("#computer-hand").style.transform="none";
    }
    else document.querySelector("#computer-hand").style.transform="rotate(90deg)";

    return computerChoice;
}



function keepScore(humanChoice){
    const humanScoreHtml = document.querySelector('.human-score');
    const computerScoreHtml =  document.querySelector('.computer-score');
    const result = whoWon(humanChoice,computerChosen());
    const resultHtml = document.querySelector('.result');
    let humanScore= parseInt(humanScoreHtml.innerHTML.slice(-1));
    let computerScore= parseInt(computerScoreHtml.innerHTML.slice(-1));
   
    resultHtml.innerHTML = result;
    console.log(result)
    switch(result){
        case "Human wins!!!": { humanScore++
            humanScoreHtml.innerHTML = humanScoreHtml.innerHTML.slice(0,-1) + humanScore;
        }
        break;
        case "Computer wins!!!": { computerScore++
            computerScoreHtml.innerHTML = computerScoreHtml.innerHTML.slice(0,-1) + computerScore;
        };
    }

    if(humanScore===5 || computerScore===5){
        humanScore>computerScore? resultHtml.innerHTML = "Human wins the match! <br> Press any key to replay": 
            resultHtml.innerHTML = "Computer wins the match! <br> Press any key to replay";
        document.addEventListener('keydown',()=> {
            humanScoreHtml.innerHTML = humanScoreHtml.innerHTML.slice(0,-1) + 0;
            computerScoreHtml.innerHTML = computerScoreHtml.innerHTML.slice(0,-1) + 0;
        })
    }
}