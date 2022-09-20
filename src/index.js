//Grabing Buttons
let displayI = document.getElementById('display');
let display2 = document.getElementById('display2');
let button = document.querySelectorAll('button');
console.log(button);
let count = 0;
let errorMessage = "'Error' Press C to reset";


//To Go through all Buttons in node list i used For loop(For Each can be used however)

for (let i = 0; i < button.length; i++) {
    //To Know when and where button was pushed i used Event listner
    button[i].addEventListener("click", (show) => {
        //displayI.value += button[i].innerHTML;
        //Added switch for addig Math
        switch (button[i].innerHTML) {
            case '=':
                try {
                    displayI.value = eval(display2.value);
                count = 1;
                } catch {
                    count = errorMessage;
                    displayI.value = errorMessage;
                }
                
                //console.log(count);
                break;
            case 'C':
                displayI.value = "";
                display2.value = "";
                break;

            case '&#177;'://(+/-) changing functionality Functionality
                displayI.value = PM();
                break;

            case '&lt;-'://Clear one Functionality
                if (displayI.value == '' || displayI.value == undefined) {
                    display2.value = display2.value.slice(0,-1);
                    break;
                }
                else {
                displayI.value = displayI.value.slice(0,-1);
                break;
                }
                
            
            
            case '+'://Repeating Operators User Error Handling    
            case '-':    
            case '*': 
            case '/': 
            case '.':
                let disValue2 = display2.value[display2.value.length - 1];//Storing value for ease of handling
                if (disValue2 == '+' || disValue2 == '-' || disValue2 == '*' || disValue2 == '/' || disValue2 == '.' || disValue2 == undefined) {
                    break;
                }       
              
            default:
                solve();//reset Calculator After peroforming 
                displayI.value += button[i].innerHTML;
                
                //console.log(display2.value);
                //console.log(display2.value[display2.value.length - 1]);
                break;
        }
    })
}


/*Additional Functions*/

   function PM() {
    
   }
   //Push Value to input 2
   function send() {
    display2.value += displayI.value;
    displayI.value = "";

    }
    function solve() {
    if (count == 1 || count == errorMessage) {
        displayI.value = "";
        display2.value = "";
        count = 0;
        //console.log(count);
    }
    }