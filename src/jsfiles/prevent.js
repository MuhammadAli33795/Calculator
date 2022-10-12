let display1 = document.getElementById('display');
display1.addEventListener('click', () => {
    let position = display1.value.length;
    display1.setSelectionRange(position,position);
})
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
            }
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
            if (display1.value[0] == '0') {
            display1.value = display1.value.slice(1,display1.value.length);
            break;}
            break;
        case '(': case ')': case '.': case 'Shift': case 'e':
            break;
        case 'ArrowUp': case 'ArrowDown': case 'ArrowLeft': case 'ArrowRight':
            let position = display1.value.length;
            display1.setSelectionRange(position,position);
            break;    
        case 'Backspace':
            displayEmpty();
            break;
        case 'Enter':
            document.getElementById('equalTo').click();
            break;
        case 'c': case 'C':
            displayI.value = "0";
            display2.value = "";
            expr = '';
            count = 0;
            cPress = 1;//Shows C is used or not
            break;
        default:
            console.log('Error Key = ' + e.key);
            display1.value = display1.value.slice(0,-1);
            displayEmpty();
            break;
    }
});

//Empty the display
 function displayEmpty() {
    if (display1.value == '' || display1.value == undefined) {
                display1.value = '0';
    }
 };
 //Replace Previous Operator
    function replaceOperatorK(operator) {
        let value = displayI.value;
        value = value.slice(0,value.length - 2);
        value = value + operator;
        displayI.value = value;
        console.log('Replace Target = ' + operator);
    };
//Delete Ans if preasent after result
function delAnsK() {
    if (count == 1) {
            displayI.value = displayI.value.slice(6,displayI.value.length);
            count = 0;
        }
};    