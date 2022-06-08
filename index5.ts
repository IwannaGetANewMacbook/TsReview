// 타입을 파라미터로 입력하는 Generic
// array입력하면 첫 자료 retrun 해주는 함수.
function firstRetrun(x: unknown[]) {
  if (typeof(x[0]) === "number" ) {
    return x[0] + 1
  }
}

console.log(firstRetrun([1, 2, 3, 4, 5, 6]))

// Generic 함수 만들기(함수 파라미터 자리에 타입넣기)
function genericEg<Type>(x: unknown[]) {
  return x[0]
}
let www = [123, 1546, 21341, 213, 34213]

let output = genericEg<number>(www)

console.log(output)

////////////////////////////////////////////////
function minusOne<MyType extends number>(x: MyType) {
  return x - 1
}
let ooo = minusOne<number>(100)
console.log(ooo)



/////////////////////////////////////////////////////
// array 자료에 붙일 수 있는 tuple type
let dog: (string | boolean)[] = ["walwal", true]
// 위 보다 더 엄격하게 타입지정 할 수도 있음.

// 만약 첫번째 자료는 무조간 string 두 번째 자료는 무조건 boolean이 들어와야 한다면?
// 튜플타입 활용.
let dog1: [string, boolean?] = ["walwal", true]


function testt(...x: [number, string]) {
  console.log(x)
}
let tsarr = [9,7,0,8,1,1]

testt(9,"hi")


// 숙제1.
let myFood: [string, number, boolean] = ["IA", 4800, true]


// 숙제2.
// let arr = ['동서녹차', 4000, true, false, true, true, false, true]
// 위의 타입 지정
type ArrHW = [string, number, ...boolean[]]
let arrHW: ArrHW = ['동서녹차', 4000, true, false, true, true, false, true]



// 숙제3. - 함수에 타입지정을 해보도록 합시다.
function HW3(...x: [string, boolean, ...(number | boolean)[]]) {
  console.log(x)
}

HW3("dwwd", true, true, 3, false, 3, 5, 6, 7)

// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
function HW4(...x: (string | number)[] ):[string[], number[]] {
  let stringA: string[] = []
  let numberA: number[] = []
  x.forEach((v, i, a) => {
    if(typeof(v) === "string") {
      stringA.push(v)
    } else {
      numberA.push(v)
    }
  })  
  return [stringA, numberA]
}

console.log(HW4('b', 5, 6, 8, 'a'))
/////////////////////////////////////////////////
// 외부 파일 이용시 declare & 이상한 특징인 ambient module
// declare 키워드: 다른데서 정의된 변수/함수를 ts에서 재정의할 때 사용하는 구문

// 어딘가에 분명 a가 있음. 에러내지 말아주세요~ 라는 뜻.
// 즉, 일반 js파일등에 있던 변수쓸 때 에러나지 않도록 재정의 할 때 사용.
declare let a: number   

console.log(a + 1)

// TS특징: 
// 모든 ts파일은 ambient module(글로벌 모듈)
// 즉 ts파일끼리는 import/export 없이 전역으로 변수/함수 사용가능!

// 이러한 ts특징이 싫다? => 로컬모튤로 만들면 됨.
export {}

// export{} 이거 하나만 붙이면 이 ts파일은 무조건 로컬모듈로 변함.
let qqq = 10;
// qqq 변수는 index3.ts에서 사용되었지만 export{} 로
// 현재ts파일을 로컬파일로 선언하였기 때문에 에러안남!
// export{} 는 아무자리나 지정해도 상관x


// 근데 갑자기 전역변수/함수 를 만들고 싶다?
// declare global{} 이거 쓰면 됨.
declare global {
  type Dog = string
}
