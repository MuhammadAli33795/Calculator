//Grabing Buttons
let displayI = document.getElementById('display');
let button = document.querySelectorAll('button');
console.log(button);



//To Go through all Buttons in node list i used For loop(For Each can be used however)

for (let i = 0; i < button.length; i++) {
    //console.log(button[i].innerHTML);
    button[i].addEventListener("click", (show) => {
        displayI.value += button[i].innerHTML;
    })
}
