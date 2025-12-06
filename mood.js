//Emily Younger 12/5/2025
const moodDisplay = document.querySelector('#moodDisplay');
const moods = {
    happy:  { bg: '#dd3e16', text: '#2c91e4', message: 'Warm smiles and the suns kisses!'},
    calm: { bg: '#81C784', text: '#000000', message: 'A sense of peace and tranquility.'},excited: { bg: '#FF7043', text: '#FFFFFF', message: 'So much energy! Ready for anything!'},
    chill: {bg: '#4FC3F7', text: '#000000',message: 'Relaxed and taking it easy.'},
    mysterious: {bg: '#424242', text: '#E0E0E0', message: 'Intriguing and full of secrets...'}
};

function handleMoodClick(moodName) {
    return moods[moodName];
}

document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains('mood-btn')) {
        return; 
    }
    const moodName = clickedElement.getAttribute('data-mood');
    if (moodName) {
        const moodConfig = handleMoodClick(moodName);
        console.log("Selected mood config:", moodConfig);
        
    }
});
