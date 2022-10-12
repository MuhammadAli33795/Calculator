let display1 = document.getElementById('display');
display1.addEventListener('keyup', (e) => {

    switch (e.key) {
        case '+': case '*': case '/':
            let disValue2 = displayI.value[displayI.value.length - 2];
                if (disValue2 == '+' || disValue2 == '*' || disValue2 == '/' || disValue2 == '-') {
                    let value = displayI.value;
                    value = value.slice(0,value.length - 2);
                    value = value + e.key;
                    displayI.value = value;
                    console.log('Target = ' + e.key);
                    break;
                }
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            if (display1.value[0] == '0') {
            display1.value = display1.value.slice(1,display1.value.length);
            break;
            }
            break;
        case '(': case ')': case '-':  case '.': case 'Shift': case 'ArrowUp': case 'ArrowDown': case 'ArrowLeft': case 'ArrowRight': case 'e':
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
            console.log('Key = ' + e.key);
            display1.value = display1.value.slice(0,-1);
            displayEmpty();
            break;
    }
});
 function displayEmpty() {
    if (display1.value == '' || display1.value == undefined) {
                display1.value = '0';
    }
 };