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

const getrankInten = (rankInten) => {
    let sprankInten
    if (rankInten > 0) 
        sprankInten = `<span class="spr">🔺${rankInten}</span>`
    else if (rankInten < 0 ) 
        sprankInten = `<span class="spb">🔻${Math.abs(rankInten)}</span>`
    else 
        sprankInten = `<span class="sp">-</span>` 
    
    return sprankInten
}

// 포스트 가져오기
const getPoster = (title) => {
    let poster = document.querySelector("#poster");
    let apikey = '';
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${title}`;

    // fetch
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        if (data.results.length > 0) {
            poster_path = data.results[0].poster_path ;
            poster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="포스터">`;
        }
        else {
            poster.innerHTML = `<img src="../img/no_img.png" alt="이미지없음">`;
        }
    })
    .catch(err => console.log(err));
}

// 박스 오피스 가져오기
    const getData = (gdt, box) => {
        let apikey = '' ;
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${gdt}`;

        // fetch
        fetch(url)  // fetch로 요청을 보내면, response 객체가 반환된다. response.json()은 Response 객체의 body를 읽어서 JSON.parse()를 실행한 것처럼 자바스크립트 객체로 바꿔준다.
        .then(resp => resp.json())  //.then이 끝나야 .then이 일어난다.
        .then(data => {
            let boxs = data.boxOfficeResult.dailyBoxOfficeList ;
            let tags = boxs.map((item) => `<li class="boxli" onclick="getPoster('${item.movieNm}')">
                                        <span class="boxrank">${item.rank}</span>  
                                        ${getrankInten(item.rankInten)}
                                        <span>${item.movieNm.slice(0,20)}</span>
                                        </li>`);
            tags = tags.join('');
        
            box.innerHTML = tags ;
        })
        .catch(err => console.log(err));

       
    }

document.addEventListener('DOMContentLoaded', () => {
    // 요소 가져오기
    const dt = document.querySelector("#dt") ;
    const box = document.querySelector("#box") ;

    //날짜가 변경될때 
    dt.addEventListener('change', ()=>{
        getData(dt.value.replaceAll('-', ''), box)
    }) ;

    // 어제 날짜
    dt.value = getYesterday() ;
    dt.setAttribute('max', getYesterday());

    // 초기 박스오피스가져오기
    getData(dt.value.replaceAll('-', ''), box) ;
}) ;