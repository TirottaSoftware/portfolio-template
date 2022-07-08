const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-links ul li');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-active');
        sidebar.classList.toggle('sidebar-transition');
    })
});
burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
})