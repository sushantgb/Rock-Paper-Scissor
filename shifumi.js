const gamePlay = () =>{
    let playerScore = 0;
    let compScore = 0;
    let moves = 0;

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
        playerOptions.forEach(event =>{
            event.addEventListener('click', ()=>{
                console.log("event : "+ event.title);
                moves++;
                let movesLeft = document.querySelector(".moves-count").innerHTML = (5 - moves);

                let computerIndex = Math.floor(Math.random() * 3);
                let computerChoiceText = computerOptions[computerIndex].name;
                let computerchoiceImage = computerOptions[computerIndex].img;
                console.log("Computer Choice : "+computerChoiceText);
                document.querySelector(".computer-choice-image").src = computerchoiceImage;
                results(event.title, computerChoiceText);

                if(moves == 5){
                    gameOver();
                }
            })
        })
    }
    const results = (player, computer) =>{
        let res = document.querySelector(".instant-result");
        let playerScoreVal = document.querySelector(".player-count");
        let compScoreVal = document.querySelector(".computer-count");

        if(player === computer){
            res.innerHTML = "TIE";
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                res.innerHTML = "Computer Won";
                compScore++;
                compScoreVal.innerHTML = compScore;
            }else{
                res.innerHTML = "You Won";
                playerScore++;
                playerScoreVal.innerHTML = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissor'){
                res.innerHTML = "Computer Won";
                compScore++;
                compScoreVal.innerHTML = compScore;
            }else{
                res.innerHTML == "You Won";
                playerScore++;
                playerScoreVal.innerHTML = playerScore;
            }
        }
        else if(player == 'scissor'){
            if(computer == 'rock'){
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
    const gameOver = () => {
        let resultContainer = document.querySelector(".result-container");
        let winner = document.querySelector(".winner");
        let gameContainer = document.querySelector(".game-container");
        let restartBtn = document.querySelector(".restart");
        let playerRes = document.querySelector(".player-result");
        let computerRes = document.querySelector(".computer-result");
        resultContainer.style.display = "flex";
        gameContainer.style.display = "none";

        playerRes.innerHTML = playerScore;
        computerRes.innerHTML = compScore;
        if(playerScore > compScore){
            winner.innerHTML = "Congratulations! You Won";
            winner.style.color = "Green";
            winner.style.backgroundColor = "white";
        }
        else if  (compScore > playerScore){
            winner.innerHTML = "Computer Won  - Better Luck Next Time";
            winner.style.color = "Red";
            winner.style.backgroundColor = "white";

        }
        else{
            winner.innerHTML = "Oopsies ! It is a Tie"
            winner.style.color = "Grey";
            winner.style.backgroundColor = "white";

        }
        restartBtn.addEventListener('click', ()=>{
            window.location.reload();
        })
    }
    startGame();
}

gamePlay();