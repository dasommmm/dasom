modalDS();

function modalDS(){

    const modal = document.getElementsByClassName('modal');
    const openLush = document.getElementsByClassName('open-lush')
    const closeLush = document.getElementsByClassName('modal-but')
    
    const openModal = ()=> {
        modal[0].classList.remove('modal-hidden');
    }
    
    const closeModal = ()=> {
        modal[0].classList.add('modal-hidden');
    }
    
    openLush[0].addEventListener("click",openModal);
    closeLush[0].addEventListener("click",closeModal);
}



