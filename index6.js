let age = 26;
// 모든 타입을 정리해놓은 레퍼런스용으로 d.ts파일 쓰기.
////////////////////////////////////////////////////////
// implements 키워드.
// interface 키워드의 두번째 용도: 클래스 타입을 확인하고 싶을 때.
class CarT {
    model;
    price = 1000;
    constructor(model) {
        this.model = model;
    }
}
let bungbungE = new CarT("avante");
// 이렇게하면 "이 class가 이 interface에 있는 속성을 다 들고있냐" 
// 를 확인해주고 다 안들고있으면 에러내줌!!
// 이게 implements 키워드의 역할!
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻.
class Car {
    model;
    price = 100;
    constructor(model) {
        this.model = model;
    }
}
let bungbungEE = new Car("morning");
let user = {
    name: "suhyeon",
    age: 26,
    location: "busan"
};
// 키값을 숫자로 지정하여 object만들 수 도 있음!
// 이렇게 키값이 숫자인 경우에도 index signature 구문이 통함!
let user1 = {
    0: "kim",
    1: 26,
    2: "busan"
};
// 이런 object 자료 타입지정은?
let css = {
    "font-size": {
        "font-size": {
            "font-size": 14
        }
    }
};
// export {};
// 14값 뽑기.
// console.log(css["font-size"]["font-size"]["font-size"])
