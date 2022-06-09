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


