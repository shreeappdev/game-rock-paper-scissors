let userScore=0;
let compScore=0;

 const choices= document.querySelectorAll('.choice');
 const userscorewhow= document.querySelector('#userScore');
 const compScoreshow= document.querySelector('#compScore');
 const message= document.querySelector('#message');

 const playGame=(userchoice)=>{
  
    let compchoice=  generateCompChoice();
    
     if(compchoice === userchoice){
        drawGame();
     }else{

        let userwin=true;
        if(userchoice === 'rock'){
            //paper, scrs
            userwin = compchoice === 'paper'? false :true;
        
        }
        if(userchoice ==='paper'){
            //scrs,rock
            userwin = compchoice === 'scrs' ? false :true;
        }
        if(userchoice ==='scrs'){
            //paper,rock
            userwin = compchoice === 'rock'? false :true;
        }

        showWinner(userwin,userchoice,compchoice);

    }


 }

 let drawGame=()=>{
     message.innerText="Draw Game.Play Again!";
    
 }
 let showWinner=(winner,userchoice,compchoice)=>{
    if(winner){
        userScore++;
        message.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
        userscorewhow.innerText=userScore;
        message.style.backgroundColor="green";

    }else{
        compScore++;
        message.innerText=`You lost! ${compchoice} beats your ${userchoice}`;
        compScoreshow.innerText=compScore;
       
        message.style.backgroundColor="red";
    }
    

 }

 const generateCompChoice=()=>{
    let options=['rock','paper','scrs'];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
 }


 choices.forEach((choice)=>{
  
    choice.addEventListener("click",()=>{
       let userchoiceid= choice.getAttribute("id");
       playGame(userchoiceid);       
    })
 })