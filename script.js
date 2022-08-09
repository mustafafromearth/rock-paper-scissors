const choiceOfHumans=document.querySelector(".weapons").childNodes;
const rock = '🪨', paper = '📜', scissors = '✂️';
const weaponsList = [rock, paper, scissors];
choiceOfHumans.forEach((element) => {
    element.addEventListener('click',humanChosen)
});

function shortcutKey(e){
    const keys=['KeyR', 'KeyP', 'KeyS'];
    keyPress=e.code;
    for(const key of keys){
        if (keyPress===key){
            console.log(keyPress);
        }
    }
};

function humanChosen(e){
    const humanChoice=e.target.innerHTML;
    document.querySelector("#human-hand").innerHTML = humanChoice;
    if(humanChoice!==scissors){
        document.getElementById("human-hand").style.transform="none";
    }
    else document.getElementById("human-hand").style.transform="scaleX(-1) rotate(90deg)";
    console.log(whoWon(humanChoice,computerChosen()));
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




function keepScore(event){
    let humanScore=0, computerScore=0;
    let humanWon ="Human wins!!!", computerWon="Computer wins!!!";
    while(humanScore<5 && computerScore<5){
        collectInputAndShowScore(humanScore,computerScore)
        let result=whoWon(humanChoice,computerChoice())
        if(result===humanWon){
            alert(humanWon);
            humanScore++;
        }
        else if(result===computerWon){
            alert(computerWon);
                computerScore++;
        }
        else if(result===tie){
            alert(tie);
        }
        
    }
    humanScore>computerScore?alert("Human wins the match!"):alert("Computer wins the match!")
}


document.querySelector(".help").addEventListener('click',bruh)
function bruh(){
    const audio= document.querySelector("audio");
    audio.currentTime =0;
    audio.play();
}