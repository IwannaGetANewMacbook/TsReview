// d.ts 파일 이용하기

// 이 파일은 d.ts 파일!
// 어따가 씀?
// project에서 사용하는 타입정의 보관용 파일
export type Age = number
export interface Person {
  name: string
  age: number
  isAdult: boolean
}

// d.ts 파일은 타입저장해놓는 파일 그 이상도 이하도 아님!
// d.ts 파일은 자동으로 ambient module로 선언되지 않음.
// 즉 d.ts 파일의 디폴트는 local module 임!
// 그래서 항상 export 해야함!

// <d.ts 파일 용도>
// 1. 타입정의 따로 보관할 파일이 필요할 때.
// 2. 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용.

