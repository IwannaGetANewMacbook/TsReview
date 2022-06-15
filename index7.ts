// object 타입 변환기 만들기


interface Person {
  name: string
  age: number
  nation: string
  isAdult: boolean
}

let person: Person = {
  name: "suhyeon",
  age: 26,
  nation: "ROK",
  isAdult: true
}

// key값을 전부 가져오는 keyof

// 팀원이 만든 이런 쓰레기타입이 있다고 가정.
type Car = {
  color: boolean,
  model: boolean,
  price: boolean | number
}

// 타입을 만들었는데 타입을 바꾸고싶으면??
// 타입변환기 만들기
type TypeChanger<MyType> = {
  [key in keyof MyType]: string | number 
}

let car: TypeChanger<Car> = {
  color: "black",
  model: "avanteCN7",
  price: 120000000
}


///////////////////////////////////////////////////
4 > 3? console.log("true") :console.log("false")
// 조건문으로 타입만들기 & infer

// 조건식은 extends 키워드 써야함.
type Age<T> = T extends string? string : unknown
let a: Age<string>
console.log(a)

// Quiz. 조건문으로 이런 타입 만들어보셈.
// 파라미터로 array타입을 입력하면 array 첫 자료의 타입을 남김게 코드짜보삼
// 타입파라미터로 입력한게 array타입이 아니면 any타입 남기게 짜보삼

type firstItem<T> = T extends any[]? T[0]: any




// 조건문에서 쓸 수 있는 infer 키워드
// infer 키워드는 타입을 왼쪽에서 추출해줌.
// 예시
type Personn<T> = T extends infer R ? T : unknown
// T에서 타입을 뽑아주세요







