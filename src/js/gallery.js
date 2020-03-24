import { getAllElementDOM, getElementDOM,  assingEventDOM } from "./utils";

const handleClickGallery = ( e ) => {
    if (e.srcElement.localName !== 'img') {
        return
    }
    
    let gallery = loadGalleryItems();
    let item = getCurrentItemPosition(gallery, e.target.src);


    displayLightBox(gallery, item);


    assingEventDOM(getElementDOM('#close'),'click', ()=>{
        closeModal()
    });

    assingEventDOM(getElementDOM('#left'),'click', ()=>{
        if ((item) < 1) {
            return;
        }

        item = item - 1;
        movementImage(item, gallery, 'left');
    });

    assingEventDOM(getElementDOM('#right'),'click', ()=>{
        if (item > 22) {
            return;
        }
        item = item + 1;
        movementImage(item, gallery, 'right');
    });

    assingEventDOM(getElementDOM('#lightBox'),'click', ()=>{
        closeModal()
    });

    assingEventDOM(getElementDOM('.box-image'),'click', (e)=>{
        e.stopPropagation()
    });
}

const closeModal = () =>{
    let lightBox = getElementDOM('#lightBox')

    lightBox.parentNode.removeChild(lightBox);
    document.body.style.overflowX = 'auto';
    document.body.style.overflowY = 'auto';
}


const movementImage = (elementPosition, lightBoxElements, direction) => {
    let image = document.querySelectorAll('.image-lightBox')[0];
    let imageText = document.querySelectorAll('.lightBox-title')[0];

    switch (direction) {
        case 'left':
            image.src = lightBoxElements[elementPosition];
            imageText.innerText = `${elementPosition + 1 }  DE  ${lightBoxElements.length}`;
            break;
        case 'right':
            image.src = lightBoxElements[elementPosition];
            imageText.innerText = `${elementPosition + 1 }  DE  ${lightBoxElements.length}`;
            break;
        default:
            break;
    }
};

const displayLightBox = (gallery, item) => {


    let lightBox = document.createElement('div');
    lightBox.className = "container-lightBox";
    lightBox.id = 'lightBox'

    lightBox.innerHTML = `
    <div class="box-image">
        <span id="close" class="fa fa-times icon-image icon-close"></span>
        <img class="image-lightBox" src="${gallery[item]}">
        </img>
        <div class="light-box__options">
            <span id="left" class="fa fa-chevron-circle-left icon-image arrow-left"></span>
            <h5 class="lightBox-title">${item +1}  DE  ${gallery.length}</h5>
            <span id="right" class="fa fa-chevron-circle-right icon-image arrow-right"></span>
        </div>
    </div>`;
    
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.setProperty('--top-position', window.scrollY + 'px ');
    
    document.body.appendChild(lightBox);
}

const getCurrentItemPosition = (gallery, element) => {
   
    for (let i = 0; i < gallery.length; i++) {
        if (gallery[i] === element) {
            return i
        }
        
    }
}

const loadGalleryItems = () => {
    let ImgEl = Array.from(getAllElementDOM('.main-gallery__img-item'))

    return ImgEl.map(img => img.querySelector('img').src)

}


const assingOnClick = () => {
    let gridGallery = getElementDOM('.main-gallery__grid-container')

    if (gridGallery) {
        assingEventDOM(gridGallery, 'click', handleClickGallery)
    }
}


export {
    assingOnClick
}








