// part2 - 함수 rest 파라미터, destructuring 할 때 타입지정

function plus(a: number , b: number, ...c: number[]) {
  let output: number = 0
  c.forEach((v, i, a) => {
    output += v
  })
  console.log(a + b + output)
  
}

plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// // ...의 spread 연산자 기능.
// // ...의 spread 연산자로서 기능은 괄호를 벗기능 기능!!
let ar = [1, 2, 3]
let ar2 = [4, 5]
let ar3 = [6, 7]
let arr4 = [...ar, ...ar2, ...ar3]
console.log(arr4)



// destructuring - array
let ggg = ["welcom to the world", 100]
let [q, w] = ggg
console.log(q, w)

// destructuring - object
let qqq = {
  name11: "kim",
  age11: 26,
  location11: "busan"
}

let {name11, age11, location11} = qqq

console.log(name11)

function test1(a: number, b: number) {
  console.log(a, b)
}
test1(1,2)










// Narrowing 할 수 있는 방법 더 알아보기

function test2(a: string | undefined) {
  // a가 undefined 이면 if문 통과하지 못함!
  // 즉, 매개변수 a에대하여 한번에 narrowing 하는 기법임.
  if(a && typeof(a) === "string") {
  }
}

type Fish = {swim: string}
type Bird = {fly: string}

function test3(animal: Fish | Bird) {
  if("swim" in animal) {
    console.log("swim속성 가짐")
  } else {
    console.log("fly속성 가짐")
  }
}

let date = new Date()
console.log(date)
/////////////////////////////////////////////////////

type Car = {
  wheel: "4개",
  color: string
}

type Bike = {
  wheel: "2개",
  color: string
}


function test4(x: Car | Bike) {
  if(x.wheel === "4개") {
    console.log("type Car", x.color)
  } else {
    console.log("type Bike")
  }
} 

test4({wheel:"4개", color: "black"})









////////////////////////////////////////////////////
// 함수에 사용하는 never 타입도 있긴 합니다

function test5 (): never{
  // 뭔가를 리턴하지 않을경우 never타입을 쓸 수 있음.
  // 근데 엄격한 조건이 필요함!
  // 1. retrun값이 없어여 함
  // 2. 함수 실행이 끝나지 않아야 함(endpoint가 없어야함)

  throw new Error() // 강제로 에러 내주세요~

}

// 사실 never타입 쓸 데 없음!!!!!!!
// 알아야 하는 이유: 우리가 코드 이상하게짜면 가끔 출몰함.
//////////////////////////////////////////////////////









// public, private 쓰는거 보니까 타입스크립트 귀여운편
// 클래스 많이 만들어서 개발하려면 public private protected static 키워드 유용

class User {
  // public 키워드 쓰면 해당 변수나 함수를 모든 자식들이 이용가능.
  // 
  name
  private myAge = 26
  private familyName: string = "kim"
  constructor(name: string) {
    this.name = name
  }

  getFullNme() {
    console.log(`this person's fullname is ${this.familyName + this.name}`)
  }

  // private 속성 수정하는 함수
  modifyValue(familyName: string) {
    this.familyName = familyName
  }
}

class UserX extends User {

}



let user1 = new User("suhyeon")
console.log(user1)

let userx = new UserX("minsu")
userx.getFullNme()
userx.modifyValue("Lee")
userx.getFullNme()

// private 키워드는 class 안에서만 수정 변경 이용 가능!!!


