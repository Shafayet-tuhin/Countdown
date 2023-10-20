const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const restartBtn = document.querySelector('.restartBtn');
const clearBtn = document.querySelector('.clearBtn');
const increaseBtn = document.querySelector('.increaseBtn');
const decreaseBtn = document.querySelector('.decreaseBtn');
const countdownDisplay = document.querySelector('.countdown');


let timer = false;
let minutes = 25;
let seconds = 0;


function updateDisplay(){
    const minutesDisplay = String(minutes).padStart(2,'0');
    const secondsDisplay = String(seconds).padStart(2,'0');
    countdownDisplay.textContent = `${minutesDisplay}:${secondsDisplay}` ;
}


function startTimer(){
    if(timer == false){
        timer = true ; 
        timer = setInterval(function() {
               
            if(minutes === 0 && seconds === 0 ) {
                clearInterval(timer) ; 
                clearTimer() ;
                countdownDisplay.textContent = 'Times Up' ;
                timer = false ; 
               }
            
            else {
                if ( seconds === 0 ) 
                {
                    seconds = 59 ; 
                    minutes-- ;
                }
                else {
                    seconds-- ; 
                }
                updateDisplay() ; 
            }   

        } , 1000)
    }
}

function stopTimer(){
    if(timer) 
    {
        clearInterval(timer) ; 
        timer = false ; 
    }
}


function restartTimer(){
    clearTimer() ; 
    startTimer() ; 
}

function clearTimer(){

    stopTimer() ;
    minutes = 25 ; 
    seconds = 0 ; 
    updateDisplay() ;  
}

function increaseTime() {
    if(timer ===  false ) 
    {
        minutes ++ ;
        updateDisplay() ; 
    }

}

function decreaseTime(){
    if(timer === false && minutes > 0 ) 
    {
        minutes-- ;
        updateDisplay() ; 
    }
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
restartBtn.addEventListener('click', restartTimer);
clearBtn.addEventListener('click', clearTimer);
increaseBtn.addEventListener('click', increaseTime);
decreaseBtn.addEventListener('click', decreaseTime);

updateDisplay();