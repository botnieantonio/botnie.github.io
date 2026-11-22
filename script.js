//Episode 5: Hire me button
document.querySelector('#hire').addEventListener('click', () => {
    document.querySelector('#msg').textContent = 'Salamat! Babalikan kita';
});

//Episode 8: Dark Mode
const theme = document.querySelector('#theme'); theme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});