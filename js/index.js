introMove();
makeMove('move-top','0.6s');
modalDS();

function introMove(){
    const introText = document.getElementsByClassName('intro-text');
    const introOne = document.getElementsByClassName('introduce-one');
    const introTwo = document.getElementsByClassName('introduce-two');
    const introThree = document.getElementsByClassName('introduce-three');
    
    for(let i=0; i<introText.length; i++){
        window.addEventListener('scroll',()=>{
            console.log(introText[i].getBoundingClientRect().top - window.innerHeight);
            if(introText[i].getBoundingClientRect().top - window.innerHeight < 0){
                introOne[i].classList.add('show');
                introTwo[i].classList.add('show');
                introThree[i].classList.add('show');
                
            }else{
                introOne[i].classList.remove('show') ; 
                introTwo[i].classList.remove('show') ; 
                introThree[i].classList.remove('show') ; 
                
            }
        })
    }
}



// makeMove('summary-icon','0.6s');
// makeMove('mockup-png', '0.8s');
// makeMove('move-right', '0.8s');

// function makeMove(className,time) {
//     const classContainer = document.getElementsByClassName(className);

//     for(let i=0; i<classContainer.length; i++){
        
//         window.addEventListener('scroll', (e)=>{
//             console.log(classContainer[i].getBoundingClientRect().top);

//             if(classContainer[i].getBoundingClientRect().top - window.innerHeight < 0){
//                 classContainer[i].classList.add('show')
//                 classContainer[i].style.transitionDuration = time;
                
//             }else{
//                 classContainer[i].classList.remove('show')
//                 classContainer[i].style.transitionDuration = '0s';
//             }
//         })
//     }
// }
// =================================================================

function makeMove(className,time){
    const nameCon = document.getElementsByClassName(className);

    for(let i=0; i<nameCon.length; i++){
        window.addEventListener('scroll',()=>{
            if(nameCon[i].getBoundingClientRect().top - window.innerHeight < 0){
                nameCon[i].classList.add('show');
                nameCon[i].style.transitionDuration = time;
            }else{
                nameCon[i].classList.remove('show');
                nameCon[i].style.transitionDuration = time;
            }
        })
    }
}

// =======================================================



// ====================================================모달창
// open-lush누르면 모달이 뜨는데 처음엔 사진의 맨위부터 뜨다가
// close 버튼 누르고 다시 누르면  사진의 맨 밑부터 떠용ㅠㅠ
// 그리고 모달창 끄면 웹사이트가 맨 위 섹션부터 다시 시작해요
// footer에 z-index를 안주면 모달 위에 footer가 떠요
// 그런데 z-index를 주니까 a 태그가 안먹혀요.....

function modalDS(){
    const modal = document.getElementsByClassName('modal');
    const openLush = document.querySelectorAll('.open-lush')
    const openPaws = document.querySelectorAll('.open-paws')
    const closeLush = document.querySelector('.lush-but')
    const closePaws = document.querySelector('.paws-but')

    
    const openModalLush = ()=> {
        modal[0].classList.remove('modal-hidden');
    }
    
    const closeModalLush = ()=> {
        modal[0].classList.add('modal-hidden');
    }

    const openModalPaws = ()=> {
        modal[1].classList.remove('modal-hidden');
    }
    
    const closeModalPaws = ()=> {
        modal[1].classList.add('modal-hidden');
    }
    
    for(var i = 0; i < openLush.length; i++){
        openLush[i].addEventListener("click",openModalLush);
    }
    closeLush.addEventListener("click",closeModalLush);
    
    for(var i = 0; i < openPaws.length; i++){
        openPaws[i].addEventListener("click",openModalPaws);
    }
    closePaws.addEventListener("click",closeModalPaws);

}




