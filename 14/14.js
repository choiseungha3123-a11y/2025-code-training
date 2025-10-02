// 데이터 가져오기
const getData = (gdt, box) => {
    let apikey = '' ;
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = `${url}serviceKey=${apikey}`
    url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = `${url}&keyword=${gdt}&_type=json`;
    console.log(url)

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let boxs = data.response.body.items.item ;
        let tags = boxs.map((item) => `<div>
            ${item.galWebImageUrl}
            ${item.galTitle}
            ${item.galPhotographyLocation}
            </div>`).join('');

            console.log(tags)
            box.innerHTML = tags ;
    })
    .catch(err => console.log(err));

   

}

document.addEventListener('DOMContentLoaded', () => {
    // 요소 선택
    const txt1 = document.querySelector('#txt1');
    const btOk = document.querySelector('#btOk');
    const btCancel = document.querySelector('#btCancel');
    const content = document.querySelector('#content');



    // 확인 버튼이 눌러지면 데이터 가져오기
    btOk.addEventListener('click', () => {
        getData(encodeURIComponent(txt1.value), content) ;
    })

    // 취소 버튼이 눌러지면 화면 지우기 => 텍스트 내용과 content 내용 지우기
    btCancel.addEventListener('click', () => {

    });
});