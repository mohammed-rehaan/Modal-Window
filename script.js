'use strict';

const openWindow = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-cross')

const open = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < openWindow.length; i++) {
        openWindow[i].addEventListener('click' , open);
}

btnClose.addEventListener('click' , close);

overlay.addEventListener('click', close);





document.addEventListener('keydown' ,function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
        close();
})