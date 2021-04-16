
let burger = document.querySelector('.burger');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    let accordionMenu = document.querySelector('.menu-mobile-collapse');
    if(burger.classList.contains('active')){
        accordionMenu.style.maxHeight = accordionMenu.scrollHeight + "px";
        document.querySelector('body').style.background = "#00000080";

    }
    else{
        accordionMenu.style.maxHeight = 0;
        document.querySelector('body').style.background = "none";
    }

});