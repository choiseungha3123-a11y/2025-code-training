// 어제 날짜 가져오기
const getYesterday = () => {
    let yesterday = new Date() ;
    yesterday.setDate(yesterday.getDate()-1) ;
    
    //let year = yesterday.getFullYear() ; // 연도 4자리
    //let mon = String(yesterday.getMonth() + 1).padStart(2, '0') ; // 월 1~12
    //let day = String(yesterday.getDate()).padStart(2,'0') ;      // 일 1~31

    //return (year + '-' + mon + '-' + day);

    //ISO 형식(예 : 2025-09-22 09:00:00.000Z)
    return yesterday.toISOString().slice(0,10) ;
}

// 박스 오피스 가져오기
    const getData = (gdt, box) => {
        let apikey = '37b6d39b2b28f1318cae275eee2dde41' ;
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${gdt}`

        // fetch
        fetch(url)  // fetch로 요청을 보내면, response 객체가 반환된다. response.json()은 Response 객체의 body를 읽어서 JSON.parse()를 실행한 것처럼 자바스크립트 객체로 바꿔준다.
        .then(resp => resp.json())  //.then이 끝나야 .then이 일어난다.
        .then(data => {
            let boxs = data.boxOfficeResult.dailyBoxOfficeList ;
            let tags = boxs.map((item) => `<li>
            ${item.rank}
            ${item.rankInten}
            ${item.movieNm}
            </li>`).join('');
            
            console.log(tags)
            box.innerHTML = tags ;
        })
        .catch(err => console.log(err));

        console.log(url)
    }
    

document.addEventListener('DOMContentLoaded', () => {
    // 요소 가져오기
    const dt = document.querySelector("#dt") ;
    const box = document.querySelector("#box") ;

    // 어제 날짜
    dt.value = getYesterday() ;
    dt.setAttribute('max', getYesterday());

    // 초기 박스오피스가져오기
    getData(dt.value.replaceAll('-', ''), box) ;
}) ;