//DOM
let landingPage = document.querySelector(".heading");
let startBtn = document.querySelector(".start");
let playPage = document.querySelector(".play-display");
let resultContainer = document.querySelector(".result-container");


//initially hide the sections
playPage.style.display = "none";
resultContainer.style.display ="none";

//start button event
startBtn.addEventListener('click', ()=>{
    landingPage.style.display = "none";
    playPage.style.display = "flex";    
    gamePlay();
})


//main gameplay function
const gamePlay = () =>{
    let playerScore = 0;
    let compScore = 0;
    let moves = 5;

    //when player select options
    const startGame = () =>{
        let rockOptn = document.querySelector(".rock");
        let paperOptn = document.querySelector(".paper");
        let scissorOptn = document.querySelector(".scissor");

        let playerOptions = [rockOptn, paperOptn, scissorOptn];
        console.log(playerOptions);
        let computerOptions = [
            {
                img: "rock.png",
                name: "rock"
            },
            {
                img: "paper.png",
                name: "paper"
            },
            {
                img: "scissor.png",
                name: "scissor"
            }
        ]
        //option selections
        playerOptions.forEach(event =>{
            event.addEventListener('click', ()=>{
                console.log("event : "+ event.title);
                moves--; //decrement in moves
                let movesLeft = document.querySelector(".moves-count").innerHTML = moves;

                let computerIndex = Math.floor(Math.random() * 3); //computer random options
                let computerChoiceText = computerOptions[computerIndex].name;
                let computerchoiceImage = computerOptions[computerIndex].img;
                console.log("Computer Choice : "+computerChoiceText);
                //display computer's selection by icon
                document.querySelector(".computer-choice-image").src = computerchoiceImage;
                results(event.title, computerChoiceText);

                //when no moves left
                if(moves == 0){
                    //disabling buttons
                    rockOptn.disabled = true;
                    paperOptn.disabled = true;
                    scissorOptn.disabled = true;
                    //calling gameover function with a delay of  1sec
                    setTimeout(() => {
                        gameOver();
                    }, 1000);
                    
                }
            })
        })
    }
    //deciding the winner per round
    const results = (player, computer) =>{
        let res = document.querySelector(".instant-result");
        let playerScoreVal = document.querySelector(".player-count");
        let compScoreVal = document.querySelector(".computer-count");

        if(player === computer){
            res.innerHTML = "It's a Tie";
        }
        else if(player === 'rock'){
            if(computer === 'paper'){
                res.innerHTML = "Computer Won";
                compScore++;
                compScoreVal.innerHTML = compScore;
            }else{
                res.innerHTML = "You Won";
                playerScore++;
                playerScoreVal.innerHTML = playerScore;
            }
        }
        else if(player === 'paper'){
            if(computer === 'scissor'){
                res.innerHTML = "Computer Won";
                compScore++;
                compScoreVal.innerHTML = compScore;
            }else{
                res.innerHTML = "You Won";
                playerScore++;
                playerScoreVal.innerHTML = playerScore;
            }
        }
        else if(player === 'scissor'){
            if(computer === 'rock'){
                res.innerHTML = "Computer Won";
                compScore++;
                compScoreVal.innerHTML = compScore;
            }else{
                res.innerHTML = "You Won";
                playerScore++;
                playerScoreVal.innerHTML = playerScore;
            }
        }
    }
    //final result
    const gameOver = () => {
        let winner = document.querySelector(".winner");
        let restartBtn = document.querySelector(".restart");
        let playerRes = document.querySelector(".player-result");
        let computerRes = document.querySelector(".computer-result");
        resultContainer.style.display = "flex";
        playPage.style.display = "none";

        playerRes.innerHTML = playerScore;
        computerRes.innerHTML = compScore;
        if(playerScore > compScore){
            winner.innerHTML = 
            `<i class="bi bi-trophy-fill"></i>  Congratulations! You Won <i class="bi bi-emoji-sunglasses"></i>` ;
        }
        else if  (compScore > playerScore){
            winner.innerHTML = `<i class="bi bi-heartbreak-fill"></i> Computer Won  - Better Luck Next Time  <i class="bi bi-emoji-dizzy"></i>`;
        }
        else{
            winner.innerHTML = `Oopsies ! It is a Tie <i class="bi bi-emoji-neutral"></i>`;
        }
        restartBtn.addEventListener('click', ()=>{
            window.location.reload();
        })
    }
    startGame();
}
