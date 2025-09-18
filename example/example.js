document.addEventListener('DOMContentLoaded', ()=>{
    const mainimg = document.querySelector('#main > img');
    const thumimg = document.querySelectorAll('#thum > img');

    console.log(thumimg)

    for(let thum of thumimg) {
        thum.addEventListener('click' , ()=>{ //mouseover로 하면 마우스가 위로 올라갔을때 바뀌게 해준다.
            mainimg.setAttribute('src', thum.getAttribute('src'));
            mainimg.setAttribute('alt', thum.getAttribute('alt'));
        });
    }

    // thumimg[0].addEventListener('click', ()=>{
    //     console.log('thumimg[0]')
    // }); //이걸 4번 하는건 너무 반복이기 때문에 for문으로 한다.
});