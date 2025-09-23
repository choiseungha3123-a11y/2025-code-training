document.addEventListener('DOMContentLoaded', ()=>{
    const bt = document.querySelector('section > button');
    const cols = document.querySelectorAll('.col');
    const msg = document.querySelectorAll('#msg');

    // 배열 초기화 : 1의 위치가 폭탄의 위치
    let arrnum = [0,0,0,0,0,0,0,0,1];
    let flag = false ;
    let idx ;
    let cnt = 0 ;

    //초기화
    const init = () => {
        flag = false ;
        cnt = 0 ;
        bt.innerHTML = '폭탄섞기';
        msg.innerHTML = '';

        for(let col of cols) col.innerHTML = '';
    }

    //폭탄섞기 버튼
    bt.addEventListener('click', ()=>{
        // 버튼을 눌렀는데 이미 폭탄이 섞여 있는 경우
        if(flag) return;
        
        // 게임이 종료된 경우 다시 초기화
        if (bt.innerHTML == '다시하기') init() ;
        
        // 섞기
        arrnum.sort(() => Math.random() - 0.5) ;

        //폭탄이 섞인 후
        flag = true;
        bt.innerHTML = '게임중 ...' ;
        msg.innerHTML = '';
    });

    //보드 선택
    for(let col of cols) {
        col.addEventListener('click', () => {
            // flag 값이 false이면 섞이지 않은 상태
            if (!flag) {
                if ( cnt == 0) msg.innerHTML = "<span>폭탄을 섞어주세요.</span>";
                return ;
            }

        cnt = cnt + 1 ;
        idx = parseInt(col.getAttribute('id').replace('col', ''));
        if (arrnum[idx] == 0) {
            col.innerHTML = '💖' ;
            if (cnt == 8) {
                col[arrnum.indexOf(1)] = '💖';
                msg.innerHTML = "<span>성공</span>";
                bt.innerHTML = '다시하기';
                flag = false;
            }
        }
        else {
            col.innerHTML = '💥';
            msg.innerHTML = "<span>실패</span>";
            bt.innerHTML = '다시하기';
            flag = false ;
        }
        console.log(cnt)          
        });
    }

});

