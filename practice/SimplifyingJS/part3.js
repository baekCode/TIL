/*
자바스크립트의 코딩의 기술 - 조 모건

Part3, 특수한 컬렉션을 이용해 코드명료성을 극대화
1. Object.assign()으로 조작 없이 객체 생성
2. 객체 펼침 연산자로 정보를 갱신
3. 맵으로 명확하게 키-값 데이터를 갱신
4. 맵과 펼침 연산자로 키-값 데이터 순회
5. 맵 생성 시 부수 효과를 피하라
6. 세트를 이용해 고유값을 관리
*/

// 1). Object.assign() : 객체를 병합 할때 쓰인다.
const target = { a: 1, b: 6 };
const source = { b: 4, c: 5, d: 7 };
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);

// 2). 객체 펼침 연산자 : 객체의 새로운 정보를 추가 및 변경이 가능하다.
const defaultBook = {
    author: '',
    title: '',
    year: 2017,
    rating: null
};
const book = {
    title: 'javascript',
    author: 'joe morgan'
};
const update = { ...book, year: 2019 };
const update2 = { ...book, title: 'JavaScript' };
const update3 = { ...defaultBook, ...book };
console.log(update);
console.log(update2);
console.log(update3);
console.log(defaultBook);
console.log(book);

// 3) map 으로 key - value 갱신
const dogs = [
    {
        이름: '뿡이',
        크기: '중형견',
        견종: '믹스비글',
        색상: '갈색&흰색'
    },
    {
        이름: '해리',
        크기: '소형견',
        견종: '말티츄',
        색상: '흰색&검정'
    },
    {
        이름: '홍식',
        크기: '중형견',
        견종: '믹스',
        색상: '갈색'
    },
    {
        이름: '순',
        크기: '중형견',
        견종: '시바',
        색상: '갈색'
    }
];
let filters = {}; // 일반적인? key - value 추가 방식
function addFilters(filters, key, value) {
    filters[key] = value;
    return getFilters();
}
function removeFilters(filters, key) {
    delete filters[key];
    return getFilters();
}
function clearFilters(filters) {
    filters = {};
    return getFilters();
}
function getFilters() {
    console.log(filters);
}
getFilters();
addFilters(filters,'무게','10Kg');
// 맵을 이용한 key value 추가
let filters2 = new Map(); // Map() 선언
filters2.set('견종','리트리버').set('크기','대형견'); // set 으로 추가
console.log(filters2.get('견종')); // get 으로 호출
console.log(filters2);
console.log(filters2.clear()); // clear()를 이용하여 초기화 
console.log(filters2);