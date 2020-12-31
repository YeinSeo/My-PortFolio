// 반응형 메뉴바
const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

// const menuicon = document.querySelector('.navbar__menuicon');
// const menu = document.querySelector('.navbar__menu');
// const icons = document.querySelector('.navbar__icons');

// menuicon.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     icons.classList.toggle('active');
// });