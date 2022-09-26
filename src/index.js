//Grabing Buttons
let displayI = document.getElementById('display');
let display2 = document.getElementById('display2');
let button = document.querySelectorAll('button');
console.log('Node List = ' + button);
let count = 0;
let errorMessage = "'Error' Press C to reset";

//To detect screen change
let viewPortWidth = window.innerWidth;
console.log('View Port Width = ' + viewPortWidth);
inputSize();

//Audio Keys
let buttonSound = new Audio('/audio/ButtonPopSound.mp3');
let resultSound = new Audio('/audio/resultSound.mp3');
let errorSound = new Audio('/audio/errorSound.mp3');



/*Feature Disabled
//to add sound on hover
let hoverSound = new Audio('/audio/HoverSound.mp3');
*/

//To Go through all Buttons in node list i used For loop(For Each can be used however)
for (let i = 0; i < button.length; i++) {
    //To Know when and where button was pushed i used Event listner
    button[i].addEventListener("click", (show) => {
            //Debug :- displayI.value += button[i].innerHTML;   
        //Adding Button audio
            if (mute == "1") {buttonExclusion(i);}//To Stop and Play sounds

        //Added switch for addig Math
        switch (button[i].innerHTML) {
            case '=':
                if (count != 1){
                    try {
                        //send();
                        displayI.value = eval(display2.value);
                        count = 1;
                        if (mute == "1") {resultSound.play();/*Adding sound on Result*/}//To Stop and Play sounds
                        break;
                    } catch {
                        count = errorMessage;
                        displayI.value = errorMessage;
                        if (mute == "1") {errorSound.play();/*errorSound*/}//To Stop and Play sounds
                        break;
                    }
                }
                break;
            case 'C':
                displayI.value = "0";
                display2.value = "";
                count = 0;
                break;
            case '<i class="fa-solid fa-landmark"></i>': //Theme Icon
            case '<i class="fa-solid fa-face-smile"></i>'://Theme Icon2
            case '<i class="fa-sharp fa-solid fa-volume-high"></i>'://VolumeON
            case '<i class="fa-solid fa-volume-xmark"></i>'://VolumeOff
                break;    
            /*
            case '&#177;'://(+/-) changing functionality Functionality
                displayI.value = PM();
                break;
            */
            case '&lt;-'://Clear one Functionality
                if (displayI.value == '' || displayI.value == undefined) {
                    display2.value = display2.value.slice(0,-1);
                    break;
                }
                else {
                displayI.value = displayI.value.slice(0,-1);
                break;
                }
             //disValue2 == '-' ||
            case '+'://Repeating Operators User Error Handling    
            //case '-':    
            case '*': 
            case '/': 
            case '.':
                let disValue2 = display2.value[display2.value.length - 1];//Storing value for ease of handling
                if (disValue2 == '+' || disValue2 == '*' || disValue2 == '/' || disValue2 == '.' || disValue2 == undefined) {
                    break;
                }           
            default:
                errorReset();//Reset Value after error
                displayI.value += button[i].innerHTML;
                break;
        }
    })
    /*//Feature Disabled
    //Adding audio class for hover sound
        button[i].addEventListener('mouseover' , () => {
        hoverSound.play();
        });
    */
}


/*Additional Functions*/

   //Push Value to input 2
   function send() {
    if (count == 1) {
        display2.value = displayI.value;
        displayI.value = "";
        count = 0;
    } else {
      display2.value += displayI.value;
      displayI.value = "";
      count = 0;
    };
    }

    function errorReset() {
        if (count == errorMessage) {//After Error Resets values
        displayI.value = "0";
        display2.value = "";
        count = 0;
    }
    }
    //Changes Output box size according to port
    function inputSize() {
        if (viewPortWidth >= 640 && viewPortWidth <= 1024) {
            displayI.size = 21;
            display2.size = 29;
        } else if (viewPortWidth >= 1024) {
            displayI.size = 23;
            display2.size = 29;
        } else {}
    }
    //Button sound Exclusion
    function buttonExclusion(flag) {
        switch (button[flag].innerHTML) {
            case '=':
                break;    
            default:
                buttonSound.play();
                break;
        }
    };
    
    