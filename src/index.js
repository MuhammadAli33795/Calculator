//Grabing Buttons
let displayI = document.getElementById('display');
let display2 = document.getElementById('display2');
let button = document.querySelectorAll('button');

let expr = '';//String to be solved
let count = 0;//Flag for Behaviour after equal to has pressed
let cPress = 1;//Shows C is used or not
let lbPress = '0';//Checks if Left Bracket has Been Pressed twice
let rbPress = '0';//Checks if Right Bracket has been Pressed Twice
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
        console.log('expr = ' + expr);
            //Debug :- displayI.value += button[i].innerHTML;   
        //Adding Button audio
            if (mute == "1") {buttonExclusion(i);}//To Stop and Play sounds

        //Added switch for addig Math
        switch (button[i].innerHTML) {
            case '<i class="fa-solid fa-landmark"></i>': //Theme Icon
            case '<i class="fa-solid fa-face-smile"></i>'://Theme Icon2
            case '<i class="fa-sharp fa-solid fa-volume-high"></i>'://VolumeON
            case '<i class="fa-solid fa-volume-xmark"></i>'://VolumeOff
            case '=':
                if (count != 1){
                    try {
                        bracketCheck();//Checks For missing Brackets and Add them
                        displayI.value = eval(expr);
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
                expr = '';
                count = 0;
                cPress = 1;//Shows C is used or not
                lbPress = '0';
                rbPress = '0';
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
                if(cPress == 1){zeroUse(button[i].innerHTML);}//When 0 in output box should stay
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
        if (count == 1) {//when you have to use result 
            display2.value += displayI.value;//Push expression to second display
            expr += displayI.value;//push expression to expr solving string
            correction();//Corrects string for evalutaion
            console.log('expr after correction = ' + expr);
            displayI.value = "";//Empty Display1
            count = 0;
        } else {
            display2.value += displayI.value;//Push expression to second display
            expr += displayI.value;//push expression to expr solving string
            console.log('expr Before correction = ' + expr);
            correction();//Corrects string for evalutaion
            console.log('expr after correction = ' + expr);
            displayI.value = "";//Empty Display1
            count = 0;
        };
    };
    
    function correction() {//For Fixing user errors before evaluation
        console.log('displayI Before correction = ' + displayI.value);
        //For left Bracket
        if (lbPress == '1') {
            leftBracket();
            lbPress = '0';
        };
        //For Right Bracket
        if (rbPress == '1') {
            rightBracket();
            rbPress = '0';
        };
        console.log('');
        console.log('displayI after correction = ' + displayI.value);
        console.log('');
    };
        //Bracket Functions
        function leftBracket() {//Add '*' behind '(' to store in expr for evaluation
            console.log('leftBracket');
            let string = expr; console.log('string = ' + string);
            //let place = string.indexOf('('); console.log('place = ' + place);
            let prePlace = string[string.length - 1]; console.log('prePlace = ' + prePlace);
            switch (prePlace) {
                case '+': case '-': case '*': case '/': case '': case '(': case undefined:
                    break;
                default:
                    expr = expr + '*'; console.log('displayI = ' + displayI.value);
                    break;
            };
            //expr = expr + '*'; console.log('displayI = ' + displayI.value);
        };

        function rightBracket() {//Add '*' after '(' to store in expr for evaluation
            console.log('rightBracket');
            let string = displayI.value; console.log('string = ' + string);
            let place = string.indexOf(')'); console.log('place = ' + place);
            let prePlace = string[place + 1]; console.log('prePlace = ' + prePlace);
            switch (prePlace) {
                case '+': case '-': case '*': case '/': case '': case undefined:
                    break;
                default:
                    let preValue = string.slice(0, place + 1);
                    preValue = preValue + '*'; console.log( 'preValue = ' + preValue);
                    let postValue = string.slice(place + 1, string.length); console.log('postValue = ' + postValue);
                    string = preValue + postValue; console.log('string = ' + string);
                    break;
            };            
            expr = string; console.log('displayI = ' + displayI.value);
        };
        function bracketCheck() {//Add '(' or ')' when one is missing
            console.log('expr in bracketCheck = ' + expr);
            
        };

            function bracketTwiceL() {//Checks if Left Bracket has been Pressed Twice
                lbPress = '1';
            };
            function bracketTwiceR() {//Checks if Right Bracket has been Pressed Twice
                rbPress = '1';
            }; 


    //After Error Resets values
    function errorReset() {//After Error Resets values
        if (count == errorMessage) {
        displayI.value = "0";
        display2.value = "";
        expr = '';
        count = 0;
    }};

    //Determines when to place zero in Output
    function zeroUse(i) {
        switch (i) {
            case '.': case '+': case '-': case '*': case '/':
                cPress = 0;
                break;
            default:
                displayI.value = "";
                cPress = 0;
                break;
        }
    };

    //Changes Output box size according to port
    function inputSize() {
        if (viewPortWidth >= 640 && viewPortWidth <= 1024) {
            displayI.size = 21;
            display2.size = 29;
        } else if (viewPortWidth >= 1024) {
            displayI.size = 23;
            display2.size = 29;
        } else {}
    };
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
    
    