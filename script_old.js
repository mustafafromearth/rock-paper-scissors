const choiceOfHumans=document.querySelector(".weapons").childNodes;
choiceOfHumans.forEach((element) => {
    element.addEventListener('click',humanChosen)
});

function humanChosen(e){
    let humanChoice
    humanChoice=e.target.id
    console.log(whoWon(humanChoice,computerChoice()))
}

// //Code to disable selection *START*
// function startDrag(event) {
//     window.addEventListener('mouseup', onDragEnd);
//     window.addEventListener('selectstart', disableSelect);
// }

// function onDragEnd() {
//     window.removeEventListener('mouseup', onDragEnd);
//     window.removeEventListener('selectstart', disableSelect);
// }
// window.addEventListener('selectstart', function(e){ e.preventDefault(); });
// document.onselectstart=false; document.onmousedown=false;
// //Code to disable selection *END*
function whoWon(humanChoice,computerChoice){
    let humanWon="Human wins!!!", computerWon="Computer wins!!!";
    if((humanChoice=="stone"||humanChoice=="rock")&&computerChoice==0||humanChoice=="paper"&&computerChoice==1||humanChoice=="scissors"&&computerChoice==2){
        return tie="It's a tie!";
    }
    if(humanChoice =="paper"){
        if(computerChoice ==0){
            return humanWon;
        }
        else{
            return computerWon;
        }
    }
    else if(humanChoice =="rock" || humanChoice=="stone"){
        if(computerChoice ==2){
            return humanWon;
        }
        else{
            return computerWon;
        }
    }
    else if (humanChoice =="scissors"){
        if(computerChoice==1){
            return humanWon;
        }
        else{
            return computerWon;
        }
    }
}
function computerChoice(){
    return Math.floor(Math.random()*3);
}


function keepScore(){
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
