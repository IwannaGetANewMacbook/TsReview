let name1 = "su";
let arr = [1, 2, 3, "kim", 2, "dwdwd"];
let obj = { name: "suhyeon" };
const test = "anyone";
function myFunc(x, y) {
    let outcome = x * y;
    console.log(outcome);
}
myFunc(3, 2);
const mymy = [1, true];
let obj1 = {
    name: "suhyeon",
    age: 26,
    location: "Dagu"
};
console.log(obj1);
let members = [123, "kim"];
const obj2 = {
    name: "suhyeon",
    age: 26,
    isAdult: true
};
console.log(obj2);
let anytype = true; // any타입은 모든 자료형 허용하는 자료형
// narrowing
function forNarrowing(x) {
    let output;
    if (typeof (x) === "number") {
        output = x + 1;
    }
    else {
        return;
    }
    return output;
}
console.log(forNarrowing(1));
export {};
