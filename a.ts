export const myAge1: number = 26
export const myName1: string = "SuHyeon"

export type Name = string


// TS타입변수 숨기기 문법
// 근데 임포트 익스포트 문법 없었던 때 사용하더 구문.

namespace exex {
  export type STorNUM = string | number
}
// => 이렇게 일종의 object안에 타입변수를 숨겨놓음.
// 목적: 타입명 중복이 일어나도 에러를 피하기위한 용도!


let ex1: exex.STorNUM = "ex1"

// 그냥 평소에는 import export 문법 쓰삼!

