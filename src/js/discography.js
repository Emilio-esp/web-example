import { assingEventDOM, getElementDOM, getAllElementDOM } from './utils';

// back cover albums

import back8 from  "../images/8_back.jpg";
import back7 from  "../images/7_back.jpg";
import back6 from  "../images/6_back.jpg";
import back5 from  "../images/5_back.jpg";
import back4 from  "../images/4_back.jpg";
import back3 from  "../images/2_back.jpg";
import back2 from  "../images/3_back.jpg";
import back1 from  "../images/1_back.jpg";

const albumsBack = {
    1: back1,
    2: back2,
    3: back3,
    4: back4,
    5: back5,
    6: back6,
    7: back7,
    8: back8,
}

const handleClickAlbum = ( e ) => {
    let album = e.target;
    

    let src = album.getAttribute('src');

    if (album) {
        let currentAlbum = getElementDOM('.main-discography__item-select').querySelector('img');
        
        let currentAlbumBack = getElementDOM('.back')

        currentAlbum.setAttribute('src', src)
        
        currentAlbumBack.style.backgroundImage = `url(${albumsBack[album.parentNode.dataset.album ]})`

    }


}

const assingOnClickDiscography = () =>{
    let discographyEl = getAllElementDOM('.main-discography__item');

    for (let i = 0; i < discographyEl.length; i++) {
        if (discographyEl[i]) {
            assingEventDOM(discographyEl[i], 'click', handleClickAlbum)
        }
        
    }
}

export {
    assingOnClickDiscography
}