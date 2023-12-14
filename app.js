let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let showMsg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container");


let player0 = true // ? 0 else X
let count = 0;   // for draw

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// disabling boxes when: winner declared
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";    // to empty the boxes since it were having marks earlier
    }     
}


// enabling boxes upon: reset and new game
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}


// function for displaying the winner
const showWinner = (name) => {
    showMsg.innerText = `Congratulations! Winner is ${name}`;
    msgContainer.classList.remove("hide");    // imp for removing the hide property which has been set
    disableBoxes();
}


// function for draw
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


// function for checking the conditions for declaring the winner
const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        }

    }
}


// function for marking text on clicking the boxes
boxes.forEach( (box) =>{
    box.addEventListener("click", ()=>{
        if(player0){    // that means its 0
            box.innerText = "0";
            player0 = false;
        }
        else{
            box.innerText = "X";
            player0 = true;
        }   

        box.disabled = true;
        count++;
        console.log(count);

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    })
} )


// reseting and new game:
const resetNewGame = () => {
    console.log("Button clicked");
    enableBoxes();
    player0 = true;
    count = 0;
    msgContainer.classList.add("hide");
}

// clicking reset and new button
resetBtn.addEventListener("click", resetNewGame);
newBtn.addEventListener("click",resetNewGame);
