const searchBtnMobile = document.getElementById('searchBtn_mobile')
const searchBtnTablet = document.getElementById('searchBtn_tablet')
const searchBox = document.getElementById('search-box');
const removeSearchBox = document.querySelector('.fa-times-circle');
let removeNavBarMobile = document.getElementById('accordion-off')
let showNavBarMobile = document.querySelectorAll('.fa-bars')
let navBarMobile = document.getElementById('accordion-wrapper')

console.log(showNavBarMobile)


searchBtnMobile.onclick = function(){
    searchBox.classList.add('search-box--active')
}
removeSearchBox.onclick = function(){
    searchBox.classList.remove('search-box--active')
}


const showNavBar = () => {
    navBarMobile.classList.add('accordion-wrapper--active')
}
const closeNavBar = () => {
    navBarMobile.classList.remove('accordion-wrapper--active')
}


showNavBarMobile.forEach(a => a.addEventListener('click', showNavBar))
removeNavBarMobile.addEventListener('click', closeNavBar)

