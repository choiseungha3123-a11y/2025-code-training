// 기존 방식
// function Hello(n) {
//     if (n== '1')    alert("안녕하세요.") ;
//     else alert('반갑습니다.') ;

//     console.log('콘솔출력입니다');// 작업자 도구의 콘솔에만 볼 수 있는 메세지
// }

// 화살표함수
const Hello = (n) => { // 변수에 함수 할당
    // ==, === 을 비교
    if (n == '1') alert("안녕하세요.") ;
    else alert('반갑습니다.') ;

    console.log('콘솔출력입니다')
}   

const CheckVar = () => {
    // x = 10 ; // 선언을 하기 전에 x의 값에 대해 적어버리면 실행오류가 나버림(이 문장을 주석해제하면 오류발생)
   
    // var x ;
    let x ;
    x= 'test' ;
    
    const y = '20' ;   // 변수는 let, 상수는 const로 일단은 기억하고 사용하기
    // y=40;
    // console.log('x =' + x) ;
    console.log(`x = ${typeof(x)}, y = ${typeof(y)}`) ;  // 키보드 ~표시 누르면 나오는 기호로 쓰는 것. 백팅문자열이라고 부름 >> 변수의 값을 묶을 수 있음 ``쓰고 $로 묶으면 됨
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x)? '예':'아니오'}`);
    console.log(`문자열 ${y}은 문자인가요? ${isNaN(y)? '예':'아니오'}`);
}