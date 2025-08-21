const dashboard = document.querySelector('.dashboard');
document.addEventListener('DOMContentLoaded', () => {
    dashboard.classList.add('invisible');
});
const navButton=document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
    dashboard.classList.toggle('invisible');
});