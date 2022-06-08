// d.ts 파일 임포트해서 타입가져다 쓰기.
import {Age} from "./test.d"

let age: Age = 26

// 모든 타입을 정리해놓은 레퍼런스용으로 d.ts파일 쓰기.

////////////////////////////////////////////////////////
// implements 키워드.
// interface 키워드의 두번째 용도: 클래스 타입을 확인하고 싶을 때.
class CarT {
  model: string
  price: number = 1000
  constructor(model: string) {
    this.model = model
  }
}

let bungbungE = new CarT("avante")

// 여기서 class가 model, price속성을 가지고있는지 타입으로 확인하고 싶으면??
// 그럴경우 interface + implements 키워드로 확인가능.
interface CarType {
  model: string
  price: number
}


// 이렇게하면 "이 class가 이 interface에 있는 속성을 다 들고있냐" 
// 를 확인해주고 다 안들고있으면 에러내줌!!
// 이게 implements 키워드의 역할!
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻.
class Car implements CarType{
  model: string
  price: number = 100
  constructor(model: string) {
    this.model = model
  }
}

let bungbungEE = new Car("morning")

////////////////////////////////////////////////////////
// object index signatures
interface StringOnly {
  [key: string]: string | number
} // 이렇게 index signature 쓰면 object타입지정 한번에 가능! 


let user: StringOnly = {
  name: "suhyeon",
  age: 26,
  location: "busan"
}

// 키값을 숫자로 지정하여 object만들 수 도 있음!
// 이렇게 키값이 숫자인 경우에도 index signature 구문이 통함!
let user1: StringOnly = {
  0: "kim",
  1: 26,
  2: "busan"
}


// 이런 object 자료 타입지정은?
let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14
    } 
  }
}

// recursive하게 타입 만드는
interface MyType {
  "font-size": MyType | number
}



// 14값 뽑기.
// console.log(css["font-size"]["font-size"]["font-size"])