//Getting all elements to be changed
let menueTheme2 = document.getElementById('menue');
let navTheme2 = document.getElementById('navHidden');
let bodyTheme2 = document.querySelector('body');
let calTheme2 = document.getElementById('callBox');
let tableTheme2 = document.getElementById('tableId');

//Getting Buttons
let theme1Button = document.getElementById('theme1');
let theme2Button = document.getElementById('theme2');

//Changing To theme 1
theme1Button.addEventListener('click', () => {
    //console.log('theme1');//Debug purpose
    menueTheme2.classList.remove('menueCssTheme2');
    navTheme2.classList.remove('dropMenueTheme2');
    bodyTheme2.classList.remove('bodyTheme2');
    calTheme2.classList.remove('calBoxTheme2');
    tableTheme2.classList.remove('tableTheme2');
});
//Changing To theme 2
theme2Button.addEventListener('click', () => {
    //console.log('theme2');//Debug purpose
    menueTheme2.classList.add('menueCssTheme2');
    navTheme2.classList.add('dropMenueTheme2');
    bodyTheme2.classList.add('bodyTheme2');
    calTheme2.classList.add('calBoxTheme2');
    tableTheme2.classList.add('tableTheme2');
});
