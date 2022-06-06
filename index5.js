"use strict";
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
