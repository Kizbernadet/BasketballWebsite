const menuButton = document.querySelector(".menu-button")
const navBar = document.querySelector(".navbar")

menuButton.addEventListener('click',()=>{
navBar.classList.toggle('mobile-menu')
})
