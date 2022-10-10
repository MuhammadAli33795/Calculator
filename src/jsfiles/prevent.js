let display1 = document.getElementById('display');
display1.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'e': case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '9': case '(': case ')': case '+': case '-': case '*': case '/': case '.': case 'Backspace': case 'Shift': case 'ArrowUp': case 'ArrowDown': case 'ArrowLeft': case 'ArrowRight':
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
            break;
        default:
            console.log('Key = ' + e.key);
            display1.value = display1.value.slice(0,-1);
            break;
    }
});