//Grabing Buttons
let displayI = document.getElementById('display');
let display2 = document.getElementById('display2');
let button = document.querySelectorAll('button');

//To detect screen change
//inputSize(); // Changes size of input box Output Screen
//On clicking input
//clickInput();
let expr = '';//String to be solved
let count = 0;//Flag for Behaviour after equal to has pressed
let cPress = 1;//Shows C is used or not
let errorMessage = "'Error' Press C to reset";

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
        //Adding Button audio
            if (mute == "1") {buttonExclusion(i);}//To Stop and Play sounds

        //Added switch for addig Math
        switch (button[i].innerHTML) {
            case '<i class="fa-solid fa-landmark"></i>': //Theme Icon
            case '<i class="fa-solid fa-face-smile"></i>'://Theme Icon2
            case '<i class="fa-sharp fa-solid fa-volume-high"></i>'://VolumeON
            case '<i class="fa-solid fa-volume-xmark"></i>'://VolumeOff
                break;
            case '=':
                    try {
                        expr = displayI.value;
                        bracketCorrection();//Corrects The Bracket '(', ')' before evaluation
                        bracketCheck();//Checks For missing Brackets and Add them
                        display2.value = displayI.value;
                        displayI.value = 'Ans = ' + eval(expr);
                        count = 1;
                        if (mute == "1") {resultSound.play();/*Adding sound on Result*/}//To Stop and Play sounds
                        break;
                    } catch {
                        count = errorMessage;
                        display2.value = displayI.value;
                        displayI.value = "'Error' Press C to reset";
                        if (mute == "1") {errorSound.play();/*errorSound*/}//To Stop and Play sounds
                        break;
                    }
                //}
                break;
            case 'C':
                displayI.value = "0";
                display2.value = "";
                expr = '';
                count = 0;
                cPress = 1;//Shows C is used or not
                break;

            case '&lt;-'://Clear one Functionality
                delAns();//Check for Ans on screen
                displayI.value = displayI.value.slice(0,-1);
                break;
           
            case '/': case '*': case '+'://Repeating Operators User Error Handling 
                let disValue2 = displayI.value[displayI.value.length - 1];//Storing value for ease of handling
                if (disValue2 == '+' || disValue2 == '*' || disValue2 == '/' || disValue2 == '.' || disValue2 == undefined) {
                    break;
                }           
            default:
                delAns();//Check for Ans on screen
                if(cPress == 1){zeroUse(button[i].innerHTML);}//When 0 in output box should stay
                errorReset();//Reset Value after error
                displayI.value += button[i].innerHTML;
                break;
        }
    })
    /*//Hover Sound Feature Disabled
    //Adding audio class for hover sound
        button[i].addEventListener('mouseover' , () => {
        hoverSound.play();
        });
    */
}
/*Additional Functions*/
/*
   //Push Value to input 2
   function send() {
        if (count == 1) {//when you have to use result 
            display2.value += displayI.value;//Push expression to second display
            expr += displayI.value;//push expression to expr solving string
            displayI.value = "";//Empty Display1
            count = 0;
        } else {
            display2.value += displayI.value;//Push expression to second display
            expr += displayI.value;//push expression to expr solving string
            displayI.value = "";//Empty Display1
            count = 0;
        };
    };
*/    
/*//Old Bracket Fuction Not Usable Broke to much Fuctionality Changed
    function correction() {//For Fixing user errors before evaluation
        //For left Bracket
        if (lbPress == '1') {
            leftBracket();
            lbPress = '0';
        };
        //For Right Bracket
        if (rbPress == '1') {
            rightBracket();
            console.log('Right Called');
            rbPress = '0';
        };
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
                    expr = expr + '*'; console.log('expr = ' + expr);
                    break;
            };
            lbPress = '0'; console.log('lbPress = ' + lbPress);
        };

        function rightBracket() {//Add '*' after '(' to store in expr for evaluation
            //console.log('rightBracket');
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
            console.log('string = ' + string);
            expr += string;
            rbPress = 0; console.log('rbPress = ' + rbPress);
        };
            function bracketTwiceL() {//Checks if Left Bracket has been Pressed
                lbPress = '1';
            };
            function bracketTwiceR() {//Checks if Right Bracket has been Pressed
                rbPress = '1';
            }; 

*/
    //Bracket Functions
        function bracketCorrection() {//Corrects The Bracket '(', ')' before evaluation
            let string = expr;
        //For loop to check position of strings
            for (let i = 0; i < string.length; i++) {
                //Check if ( has been found
                if (string[i] == '(') {
                    let prePlace = string[i - 1];                    
                    switch (prePlace) {
                        case '+': case '-': case '*': case '/': case '': case '(': case undefined:
                            break;

                        default:
                            let preValue = string.slice(0, i);
                            preValue = preValue + '*';                             
                            let postValue = string.slice(i, string.length);        
                            string = preValue + postValue; 
                        break;
                    }
                } else if (string[i] == ')') {  
                    let postPlace = string[i + 1];  
                    switch (postPlace) {
                        case '+': case '-': case '*': case '/': case '': case ')': case undefined:
                        break;

                    default:
                        let preValue = string.slice(0, i + 1);
                        preValue = preValue + '*';              
                        let postValue = string.slice(i + 1, string.length); 
                        string = preValue + postValue;   
                        break;
                    }
                }
            }
            expr = string;
        };    

        function bracketCheck() {//Add '(' or ')' when one is missing before evaluation
            let string = expr;//Storing For Usage Here
            let lneed = 0;
            let rneed = 0;
            for (let i = 0; i < string.length; i++) { 
                //'(' Left bracket check
                if(string[i] == '('){
                    rneed += 1;
                }
                // ')' Right bracket check 
                else if (string[i] == ')') {
                    rneed -= 1;
                    if (rneed < 0) {
                        rneed = 0;
                    };
                };
            };
            for (let i = string.length - 1; i >= 0; i--) {
    
                //')' Left bracket check
                if(string[i] == ')'){
                    lneed += 1;
                }
                // '(' Right bracket check 
                else if (string[i] == '(') {
                    lneed -= 1;
                        if (lneed < 0) {
                            lneed = 0;
                        };
                    };
                };

            //Adding Brackets
            if (lneed != 0){
                for (let i = 1; i < lneed + 1; i++) {//Left Brackets
                    expr = '(' + expr;
                };
            };
            if (rneed != 0){
                for (let i = 1; i < rneed + 1; i++) {//Right Brackets
                    expr = expr + ')';
                };
            };
        };

    //After Error Resets values
    function errorReset() {//After Error Resets values
        if (count == errorMessage) {
        displayI.value = "0";
        //display2.value = "";
        expr = '';
        count = 0;
    }};

    //Determines when to place zero in Output
    function zeroUse(i) {
        switch (i) {
            case '+': case '-': case '*': case '/': case '.':
                cPress = 0;
                break;
            default:
                displayI.value = "";
                cPress = 0;
                break;
        }
    };
    /*//Changes Output box size according to port
    function inputSize() {
        let tableWidth = document.getElementById('tableId').clientWidth; //Table Width
        console.log(tableWidth);
        
        if (tableWidth == 388) {
            displayI.size = 21;
            display2.size = 29;
        } else if (tableWidth == 484) {
            displayI.size = 23;
            display2.size = 29;
        }
    };
    */
    
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

    //On Clicking input
    function clickInput() {
        let input = document.getElementById('display');
        let input2 = document.getElementById('display2');

            input.classList.add('onClick');
            input2.classList.add('onClick');

    }

    //If Equal to is pressed then Remove 'Ans = ' From displayI.value
    function delAns(){
        if (count == 1) {
            displayI.value = displayI.value.slice(6,displayI.value.length);
            count = 0;
        }
    };