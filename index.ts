// export {}를 이용해서 local file로 만들어버리기!
export {}


let name1: string = "su"
let arr: (string | number)[] = [1, 2, 3, "kim", 2, "dwdwd"]
let obj: {name?: string} = {name: "suhyeon"}

type MyType = string | number

const test: MyType = "anyone"

function myFunc(x: number, y: number): void {
  let outcome = x * y
  console.log(outcome)
}

myFunc(3, 2)

//array의 튜풀타입
type MyType1 = [number, boolean]
const mymy: MyType1= [1, true]

let obj1: {[key: string]: string | number} = {
  name: "suhyeon",
  age: 26,
  location: "Dagu"
}
console.log(obj1)

let members: (string | number)[] = [123, "kim"]
const obj2: {[key: string]: (string | number | boolean)} = {
  name: "suhyeon",
  age: 26,
  isAdult: true
}
console.log(obj2)

let anytype: any = true // any타입은 모든 자료형 허용하는 자료형

// narrowing
function forNarrowing(x: string | number) {
  let output: number
  if (typeof(x) === "number") {
    output = x + 1
  } else{
    return
  }
  return output  
}

console.log(forNarrowing(1))
