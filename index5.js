// 타입을 파라미터로 입력하는 Generic
// array입력하면 첫 자료 retrun 해주는 함수.
function firstRetrun(x) {
    if (typeof (x[0]) === "number") {
        return x[0] + 1;
    }
}
console.log(firstRetrun([1, 2, 3, 4, 5, 6]));
// Generic 함수 만들기(함수 파라미터 자리에 타입넣기)
function genericEg(x) {
    return x[0];
}
let www = [123, 1546, 21341, 213, 34213];
let output = genericEg(www);
console.log(output);
////////////////////////////////////////////////
function minusOne(x) {
    return x - 1;
}
let ooo = minusOne(100);
console.log(ooo);
/////////////////////////////////////////////////////
// array 자료에 붙일 수 있는 tuple type
let dog = ["walwal", true];
// 위 보다 더 엄격하게 타입지정 할 수도 있음.
// 만약 첫번째 자료는 무조간 string 두 번째 자료는 무조건 boolean이 들어와야 한다면?
// 튜플타입 활용.
let dog1 = ["walwal", true];
function testt(...x) {
    console.log(x);
}
let tsarr = [9, 7, 0, 8, 1, 1];
testt(9, "hi");
// 숙제1.
let myFood = ["IA", 4800, true];
let arrHW = ['동서녹차', 4000, true, false, true, true, false, true];
// 숙제3. - 함수에 타입지정을 해보도록 합시다.
function HW3(...x) {
    console.log(x);
}
HW3("dwwd", true, true, 3, false, 3, 5, 6, 7);
// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
function HW4(...x) {
    let stringA = [];
    let numberA = [];
    x.forEach((v, i, a) => {
        if (typeof (v) === "string") {
            stringA.push(v);
        }
        else {
            numberA.push(v);
        }
    });
    return [stringA, numberA];
}
console.log(HW4('b', 5, 6, 8, 'a'));
console.log(a + 1);
// export{} 이거 하나만 붙이면 이 ts파일은 무조건 로컬모듈로 변함.
let qqq = 10;
export {};
