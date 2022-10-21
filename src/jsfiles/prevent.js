let display1 = document.getElementById('display');
display1.addEventListener('click', () => {
    let position = display1.value.length;
    display1.setSelectionRange(position,position);
})
//let valuesN = 1;
display1.onkeydown = function(e) { //Prevents Values Keyboard Control
    
    switch (e.key) {
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '+': case '*': case '/': case '-': case '(': case ')': case '.': case 'Shift': case 'ArrowUp': case 'ArrowDown': case 'ArrowLeft': case 'ArrowRight': case 'Backspace': case 'Enter': case 'c': case 'C':
            break;
    
        default:
            return false;
            break;
    }
};
//For mobile screens
display1.ontouchstart = function (e) {
    display1.readOnly = true;
}
display1.addEventListener('keyup', (e) => {
    delAns();
    switch (e.key) {
        case '-': //Negative Casses
            let disValue1K = displayI.value[displayI.value.length - 2];
            if (disValue1K == '-' || disValue1K == '+') {
                replaceOperatorK(e.key);
                break;
            }
            if (display1.value[0] == '0') {
                display1.value = display1.value.slice(1,display1.value.length);
                //valuesN -= 1;
            }
            //valuesN += 1;
            break;
        case '+': case '*': case '/':

            let disValue2K = displayI.value[displayI.value.length - 2];
            if (disValue2K == '+' || disValue2K == '*' || disValue2K == '/') {
                replaceOperatorK(e.key);
                break;
            }
            if (disValue2K == '-') {
                let disValue3K = displayI.value[displayI.value.length - 3];
                if (disValue3K == '*' || disValue3K == '/') {
                    displayI.value = displayI.value.slice(0,displayI.value.length - 1);
                    break;
                }
                replaceOperatorK(e.key);
                break;
            }
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            //valuesN += 1;
            if (display1.value[0] == '0') {display1.value = display1.value.slice(1,display1.value.length);
            //valuesN -= 1;
            }
            break;
        case '(': case ')': case '.':
           // valuesN += 1;
            if (display1.value[0] == '0') {display1.value = display1.value.slice(1,display1.value.length);
            //valuesN -= 1;
            }
            break;
        case 'Shift':
            break;    
        case 'ArrowUp': case 'ArrowDown': case 'ArrowLeft': case 'ArrowRight':
            let position = display1.value.length;
            display1.setSelectionRange(position,position);
            break;    
        case 'Backspace':
            displayEmpty();
            //valuesN -= 1;
            break;
        case 'Enter':
            document.getElementById('equalTo').click();
            let lengthDis  = displayI.value.slice(6,displayI.value.length);
            //valuesN =  lengthDis.length;
            break;
        case 'c': case 'C':
            document.getElementById('C').click();
            //valuesN = 1;
            break;
        default:
        /*
            let compare = displayI.value.length;
            if (valuesN != compare) {
                display1.value = display1.value.slice(0,-1);
            }
            valueCheck(); //Exclude Non-Usable keys
        */
            break;
    }
    /*
    if (valuesN <= 0) { //Prevent valueN to go in minus
        valuesN = 1; 
    }
    */
});

 //Replace Previous Operator
    function replaceOperatorK(operator) {
        let value = displayI.value;
        value = value.slice(0,value.length - 2);
        value = value + operator;
        displayI.value = value;
    };
//Delete Ans if preasent after result
function delAnsK() {
    if (count == 1) {
            displayI.value = displayI.value.slice(6,displayI.value.length);
            count = 0;
        }
};
//Empty display
function displayEmpty(){
    if (displayI.value == '') {
        displayI.value = '0';
    }
}
/*
//Exclude Non useable values
function valueCheck(){
    let hold = display1.value;
    let length = hold.length;
    let Key;
    for (let i = 0; i < length; i++) {
            Key = hold[hold.length - 1];
            switch (Key) {
                case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '+': case '*': case '/': case '-': case '(': case ')': case '.':
                    i = length;
                    break;
                default:
                    hold = hold.slice(0,-1);
                    break;
            }
    }
    display1.value = hold;
}    
*/