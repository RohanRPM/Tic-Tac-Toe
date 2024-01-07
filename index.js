 
 const boxes = document.querySelectorAll(".box");
 const gameInfo = document.querySelector(".game-info");
 const newGameBtn = document.querySelector(".btn");

 let currentPlayer;
 let gameGrid;

 const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],

 ];


function initGame()
{
    currentPlayer = "R";
    gameGrid = ["", "", "","", "", "","", "", "",];
    boxes.forEach((box,index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        boxes[index].classList.remove("win");
    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`
} 


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
})

function handleClick(index)
{
    if(gameGrid[index] === "")
    {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
       
        swapTurn();

        checkGameOver();
    }
}

function checkGameOver()
{
    let answer = "";

     winningPositions.forEach((pos) =>{
        if(gameGrid[pos[0]] == "R" && gameGrid[pos[1]] == "R" && gameGrid[pos[2]] == "R")
        {
            answer = "R";
            boxes[pos[0]].classList.add("win");
            boxes[pos[1]].classList.add("win");
            boxes[pos[2]].classList.add("win");
        }
        if(gameGrid[pos[0]] == "Nyes" && gameGrid[pos[1]] == "Nyes" && gameGrid[pos[2]] == "Nyes") 
        { 
            answer = "Nyes";
            boxes[pos[0]].classList.add("win");
            boxes[pos[1]].classList.add("win");
            boxes[pos[2]].classList.add("win");
        } 
     })

     if(answer !== "")
     {
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }
    
    let fill = 0;
    
    gameGrid.forEach((box) =>{
        if(box !== "")fill++;
    })
    
    if(fill == 9)
    {
         gameInfo.innerText = `Game Tied....!`;
         newGameBtn.classList.add("active");
         return; 
     }
}


function swapTurn()
{
    if(currentPlayer === "R")
    {
        currentPlayer = "Nyes";
    }
    else
    {
        currentPlayer = "R";
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}`; 
}

newGameBtn.addEventListener("click" , initGame);
initGame();
