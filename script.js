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
document.addEventListener('keyup',humanChosen);


function humanChosen(event){
    //For getting hummanChoice from keypress
    let humanChoice;
    if(event.type==="keyup"){
        const keys=['KeyR', 'KeyP', 'KeyS'];
        let keyPress=event.code;
        if(keyPress==='Enter'){return}
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