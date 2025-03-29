// Вземете елемента за бутона и менюто
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

// Добавете събитие за клик върху бутона за менюто
menuBtn.addEventListener('click', () => {
    // Променя класа на менюто за показване или скриване
    menuList.classList.toggle('show');
});