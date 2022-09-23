let menue = document.getElementById('menue');
let navHidden = document.getElementById('navHidden')
//Adding Event listner to know when menue button is pressed
menue.addEventListener('click', () => {
    if (navHidden.classList.contains('hidden')) {
        navHidden.classList.remove('hidden');
    } else {
        navHidden.classList.add('hidden');
    }
});

//Bg Sound
let bgSound1 = new Audio('/audio/bgSound1.mp3');
let bgSound2 = new Audio('/audio/bgSound2.mp3');
let mute = 1;

//Mobile Nav Functionality
    //Themes
        let theme1 = document.getElementById('theme1');
        let theme2 = document.getElementById('theme2');
    //Background Music
        let song1 = document.getElementById('songOn');
        let song2 = document.getElementById('songOff');
        //Using Event listner to know when buttons are clicked
               song1.addEventListener('click', () => {
                playbg();
               });
               song2.addEventListener('click', () => {
                bgSound1.pause();
                bgSound2.pause();
               });
    //Button Audio
        let buttonSound1 = document.getElementById('audioOn');
        let buttonSound2 = document.getElementById('audioOff');
        //Using Event listner to know when buttons are clicked
               buttonSound1.addEventListener('click', () => {
                mute = 1;
               });
               buttonSound2.addEventListener('click', () => {
                mute = 0;
               });
        
    //Bg Audio
        function playbg() {
            if (bgSound1.paused == true && bgSound2.paused == true) {
                bgSound1.play();
            } else if (bgSound1.paused == true) {
                bgSound2.play();
            }    
        };