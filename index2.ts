// 06.02

// export {}를 이용해서 local file로 만들어버리기!
export{}

function myfu(x: number | string): number {
  if (typeof(x) === "number") {
    return x + 1
  } else {
    return 0
  }
}

console.log(myfu(1))

function any(x: number | string) {
  let arr: number[] = []
  arr[0] = x as number
}

// as 문법은 비상용!!!


// type alias! = 타입변수
type Animal = number | string | undefined | number[]
type AnimalObj = {
  readonly name: string,
  age: number
}

const animalObj: AnimalObj = {
  name: "kim",
  age: 26,
} as const
// console.log(animalObj.name = "수")

type Name = string
type Age = number

const me: Name | Age = "kim"

type PositionX = {x: number}
type PositionY = {y: number}

let position: PositionX & PositionY = {
  x: 12,
  y: 24
}

console.log(position.x * position.y)


type RSPType = "rock" | "scissors" | "paper"
function RSP(x: RSPType): RSPType[]{
  return [x]
}

console.log(RSP("paper"))


// literal type 의 문제점.
let data = {
  name: "kim"
}

function myfff (a: "kim") {

}

myfff("kim")


// 함수 type 저장해서 쓰는 법
type FunctionType = (a: number) => number


// 변수 활용해서 함수 만드는걸 "함수 표현식!!"
const functionType: FunctionType = function (a) {
  return a + 12
}

console.log(functionType(12))


// 오브젝트 안에다가 함수 저장하기
let userInfo = {
  name: "kim",
  age: 26,
  location: "Daegu",

  nameAndAge: function() {
    console.log(`이름: ${this.name} 나이: ${this.age}`)
  },

  nameAgeLo(a: number) {
    console.log(`name:${this.name} age: ${this.age} location: ${this.location}` + a)
  }
}
userInfo.nameAndAge()
userInfo.nameAgeLo(1)



// HTML 변경 / 조작
// 셀렉터로 html요소를 잘 못찾으면 변수에 null 이 들어감.
let title = document.querySelector("#title")
if (title instanceof Element) {
  title.innerHTML = "Wellcom to the world"
  
}


let link = document.querySelector(".link")
if(link instanceof HTMLAnchorElement  ) {
  link.href = "https://www.kakao.com/"
}


let button = document.querySelector("#button")
if(button) {
  button.addEventListener("click", () => {
    console.log("push the button!")
  })
}


class LolCharactor {
  // 필드값 지정공간
  data = 0
  name
  skill
  power
  constructor(name: string, skill:string, power: number) {
    this.name = name
    this.skill = skill
    this.power = power
  }
  showChamp() {
    console.log(`
    name: ${this.name}
    skill: ${this.skill}
    power: ${this.power}
    `)
  }
} 


const nunu = new LolCharactor("nunu", "gung", 98)
nunu.showChamp()
console.log(nunu.data)










// Object에 타입지정하려면 interface 이것도 있음
type TypeName = string
interface InterfaceName {
  name: string
  age: number
  isAdult: boolean
}

// Object의 경우는 이처럼 type키워드와 interface키워드 아무거나 사용 가능!
const myName: InterfaceName = {
  name: "su",
  age: 26,
  isAdult: true
}

console.log(myName)


// Quiz - 이거 interface 키워드로 타입지정 해보삼
let student: Student = {
  name: "kim"
}

let teacher: Teacher = {
  name: "Park",
  age: 43
}

interface Student {
  name: string
}

// interface 장점: 이렇게 interface끼리 extends 가능함!!
interface Teacher extends Student {
  age: number
}

console.log(teacher)

// type 과 interface 차이점:
// type은 중복선언 불가능
// interface는 중복선언 가능!!
// interface 중복선언시 두 개가 합쳐짐!!!(자동 extends)
