document.addEventListener('DOMContentLoaded', ()=>{
    const prevBt = document.getElementById('prevBt');//뒤에 있는 prevBt에는 샵 사용 X
    const nextBt = document.querySelector('#nextBt');
    const mainimg = document.querySelector("#mainimg > img");

    //이미지 배열
    const arrImg = ['html.png', 'js.png', 'css.png', 'react.png',];
    let idx = 0;

    //이미지 업데이트
    const updateImg = () => {
        mainimg.setAttribute('src', `../img/${arrImg[idx]}`);
        mainimg.setAttribute('alt', arrImg[idx].split('.')[0]);

        if (idx == 0) prevBt.style.backgroundColor = "white" ;
        else prevBt.style.backgroundColor = "black" ;
        
        if (idx == arrImg.length - 1) nextBt.style.backgroundColor = "white" ;
        else nextBt.style.backgroundColor = "black" ;
    }


        //이전
        prevBt.addEventListener('click', ()=>{
            idx = idx - 1;
            if (idx < 0) idx = 0;
            updateImg();
        });

        //이후  
        nextBt.addEventListener('click', ()=>{
            idx = idx + 1;
            if ( idx > arrImg.length - 1) idx =arrImg.length - 1 ;
            updateImg();
        });

    updateImg();
});