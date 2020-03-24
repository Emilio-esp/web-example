import { getElementDOM, assingEventDOM } from "./utils";

const clickmenuToggle = () => {
    let menu = getElementDOM('#menu-toggle');
    let navEl = getElementDOM('#menu');

    if (menu && navEl) {
        menu.addEventListener('click', () => {            
            navEl.classList.toggle('menu-active')
            menu.classList.toggle('animate-menu')
        })
    }
}

window.addEventListener('scroll', ()=>{
    let scrollY = window.pageYOffset;

    // changeColorBackgroundHeader( scrollY );
    menuActive(scrollY);

})

const menuActive = ( scrollY ) => {
    let sectionHome = getOffsetTop(['#home']);
    let sectionGallery = sectionHome + getOffsetTop('#gallery');
    let sectionDiscography = sectionGallery + getOffsetTop('#discography');
    let sectionContact = sectionDiscography + getOffsetTop('#contact');

    let navEl = getElementDOM('.nav__menu');

    (scrollY < sectionHome) ?
     navEl.children[0].classList.add('active') 
    : navEl.children[0].classList.remove('active');

    (scrollY < sectionGallery && scrollY > sectionHome) ?
     navEl.children[1].classList.add('active') 
    : navEl.children[1].classList.remove('active');

    (scrollY < sectionDiscography && scrollY > sectionGallery) ?
     navEl.children[2].classList.add('active') 
    : navEl.children[2].classList.remove('active');

    (scrollY < sectionContact && scrollY > sectionDiscography) ?
     navEl.children[3].classList.add('active') 
    : navEl.children[3].classList.remove('active');

}

const getOffsetTop = ( element ) => {
    let elDOM = getElementDOM(element);

    if (elDOM) {
        return elDOM.offsetHeight
    }

    return 0;

}

const assingEventName = () => {
    let elDOm = getElementDOM('#header_home');
    
    assingEventDOM(elDOm, 'click' , ()=>{
        window.location.replace(window.location.origin+"#")
    })
}

export {
    clickmenuToggle,
    assingEventName
}