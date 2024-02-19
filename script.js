let userScore = 0, compScore = 0;
let user = document.querySelector(".user");
let comp = document.querySelector(".comp")
let choices = document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let messageBox=document.querySelector(".messagebox");
let win=document.querySelector(".result1");
let lose=document.querySelector(".result2");
let done=document.querySelector(".done");
let section=document.querySelector("section");
let contents=document.querySelector(".contents");

//Adding event listeners
for (let choice of choices) {
    choice.addEventListener("click", () => {
        const userClicks = choice.getAttribute("id");
        console.log(userClicks, "was selected by user");
        playGame(userClicks);
    });
}

//function to generate random number
const compGenerates = () => {
    let num=Math.floor(Math.random() * 3);
    let arr=["rock","paper","scissors"];
    console.log(arr[num]," was selected by comp")
    return arr[num];

}

//sleep method
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

const playGame=(userChoice)=>{
    let compChoice=compGenerates();
    if (userChoice===compChoice){
        msg.innerText="It was a draw!"
        messageBox.style.backgroundColor="#081B31";
    }
    else if (userChoice==="rock"){
        if (compChoice==="paper"){
            compScore++;
            msg.innerText="You lose! Paper beats rock."
            messageBox.style.backgroundColor="red";
            comp.innerText=compScore;
        }
        else{
            userScore++;
            msg.innerText="You Win! Rock beats Scissors."
            messageBox.style.backgroundColor="green";
            user.innerText=userScore;
        }
    }
    else if (userChoice==="paper"){
        if (compChoice==="rock"){
            userScore++;
            msg.innerText="You Win! Paper beats Rock."
            messageBox.style.backgroundColor="green";
            user.innerText=userScore;
        }
        else{
            compScore++;
            msg.innerText="You lose! Scissors beats paper."
            messageBox.style.backgroundColor="red";
            comp.innerText=compScore;
        }
    }
    else if (userChoice==="scissors"){
        if (compChoice==="rock"){
            compScore++;
            msg.innerText="You lose! Rock beats Scissors."
            messageBox.style.backgroundColor="red";
            comp.innerText=compScore;
        }
        else{
            userScore++;
            msg.innerText="You Win! Scissors beats Paper."
            messageBox.style.backgroundColor="green";
            user.innerText=userScore;
        }
    }
    console.log("----------------------------------");
    if (userScore===10){
        userScore=0;
        compScore=0;
        user.innerText=userScore;
        comp.innerText=compScore;
        msg.innerText="Play your move"
        messageBox.style.backgroundColor="#081B31";
        win.classList.add("done");
        section.classList.add("contents");
        sleep(3000).then(()=>{
             win.classList.remove("done");
             section.classList.remove("contents");
            });
       
    }
    if (compScore===10){
        userScore=0;
        compScore=0;
        user.innerText=userScore;
        comp.innerText=compScore;
        msg.innerText="Play your move"
        messageBox.style.backgroundColor="#081B31";
        lose.classList.add("done");
        section.classList.add("contents");
        sleep(3000).then(()=>{
             lose.classList.remove("done");
             section.classList.remove("contents");
            });
    }
}
