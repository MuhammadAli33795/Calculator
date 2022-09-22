let menue = document.getElementById('menue');
let navHidden = document.getElementById('navHidden')
//Adding Event listner to know when menue button is pressed
menue.addEventListener('click', () => {
    if (navHidden.classList.contains('hidden')) {
        navHidden.classList.remove('hidden')
    } else {
        navHidden.classList.add('hidden')
    }
})