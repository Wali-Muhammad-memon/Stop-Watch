const splash = document.querySelector(".splash");

function display(){

    setInterval(timer,2000);

}

function timer(){
       splash.classList.add('display-none');
}

// let min = 00;
// let sec = 00;
// let milisec = 00;


// let minHead = document.getElementById('minHead');
// let secHead = document.getElementById('secHead');
// let miliHead = document.getElementById('miliHead');


// let interval;

// function timer(){
//     milisec++;
//     miliHead.innerHTML = milisec;
//     if(milisec >= 100){
//         sec++;
//         secHead.innerHTML = sec;
//         milisec = 0;
//     }else if(sec > 59){
//         min++;
//         minHead.innerHTML = min;
//         sec = 0;
//     }
// }
// function start(){
// interval = setInterval(timer,10);
//  document.getElementById("start").disabled = true;
// }
// function pause(){
//     clearInterval(interval);
// }
// function reset(){
//     min = 00;
//     sec = 00;
//     milisec = 00;
//     miliHead.innerHTML = milisec;
//     secHead.innerHTML = sec;
//     minHead.innerHTML = min;
//     stop();
// }



// let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;

// const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const millisecondsContainer = document.getElementById("milliseconds");

// const start = document.getElementById("start");
// const stop = document.getElementById("stop");
// const reset = document.getElementById("reset");

// const startTimer = () => {
//   clearInterval(interval);
//   interval = setInterval(startWatch, 10);
// }

// const stopTimer = () => {
//   clearInterval(interval);
// }

// const resetTimer = () => {
//   milliseconds = 0;
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
  
//   millisecondsContainer.innerHTML = "00";
//   secondsContainer.innerHTML = "00";
//   minutesContainer.innerHTML = "00";
//   hoursContainer.innerHTML = "00";
// }

function startWatch() {
    milliseconds++;
    if(milliseconds < 9) {
      millisecondsContainer.innerHTML = `0${milliseconds}`;
    } else if (milliseconds > 99) {
      milliseconds = 0;
      millisecondsContainer.innerHTML = "00";
      seconds++;
    } else {
      millisecondsContainer.innerHTML = milliseconds;
    }
    
    if(seconds < 10) {
      secondsContainer.innerHTML = `0${seconds}`;
    } else if(seconds > 59) {
      minutes++;
      seconds = 0;
      secondsContainer.innerHTML = "00";
    } else {
      secondsContainer.innerHTML = seconds;
    }
    
    if(minutes < 10) {
      minutesContainer.innerHTML = `0${minutes}`;
    } else if(minutes > 59) {
      minutes = 0;
      minutesContainer.innerHTML = minutes;
    } else {
      minutesContainer.innerHTML = minutes;
    }
}
function start(){
        interval = setInterval(startWatch,10);
        document.getElementById("start").disabled = true;
            }

            function pause(){
                clearInterval(interval);
                document.getElementById("start").disabled = false;
            }

            function reset(){
                minutes = 0;
                seconds = 0;
                milliseconds = 0;
                millisecondsContainer.innerHTML = '00';
                secondsContainer.innerHTML = '00';
                minutesContainer.innerHTML = '00';
                pause();
            }


            
    
//     if(hours < 10) {
//       hoursContainer.innerHTML = `0${hours}`;
//     } else {
//       hoursContainer.innerHTML = hours;
//     }
//   }


