
let initialscore=100
let highscore=null;
let randomnumber = generateRandomInteger(100);
function reloadgame(){
    document.getElementById('guessid').value="";
    document.querySelector('.score').textContent=100
    document.querySelector('#sc').textContent="Start guessing Your Number..."
    document.body.style.backgroundColor="#222";
    document.querySelector('.number').style.height="12rem"
    document.querySelector('.number').textContent="?";
     randomnumber = generateRandomInteger(100);
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
  
    
  
  function maincheck(){
          
       let inputnumber= document.querySelector('#guessid').value
    //    let changvalue=document.querySelector('.score').textContent

    if(initialscore!==0){
       if(inputnumber>randomnumber ){
       document.querySelector('.message').textContent="Your Guess Is High"
           initialscore--
         document.querySelector('.score').textContent=initialscore
       }
       else if(inputnumber<randomnumber){
        document.querySelector('.message').textContent="Your Guess Is Low"
        initialscore--
        document.querySelector('.score').textContent=initialscore
       }
       else{

        document.querySelector('.message').textContent=" !!! You Won !!!"
        document.body.style.backgroundColor="red";
        initialscore--
        document.querySelector('.score').textContent=initialscore
        document.querySelector('.number').textContent=randomnumber;
        document.querySelector('.number').style.height="10rem"
         highscore=initialscore
          document.querySelector('.highscore').textContent=highscore
          // at last check button hidden
          document.querySelector('.check').style.visibility="hidden"    
        
             
        
       }
    } else{
        document.querySelector('.message').textContent="Game Over 🙂 🙂 your score is 0"
        
    }
       
   }