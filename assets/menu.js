const menuButton = document.querySelector('.button-menu');
const menuList = document.querySelector('.menu-list');
const menuLinks = document.querySelectorAll('.menu-links');
const activeClass = "active"

menuButton.addEventListener("click", function(e){
    menuList.classList.toggle('active')
    menuLinks.forEach((link) =>{
        link.classList.add('opened');
    })

    animateLinks();
})

function animateLinks(){
    menuLinks.forEach((link) => {
        link.style.animation ? link.style.animation = '' : link.style.animation = `slideLinks .5s ease forwards .5s`
    });
}

document.addEventListener('click', function(e){
    const element = e.target;

    if(element.classList.contains('opened')){
        menuList.classList.toggle('active')
        animateLinks();

        menuLinks.forEach((link) =>{
            link.classList.remove('opened');
        })
    }
})

