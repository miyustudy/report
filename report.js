// null_vs_undefined.js

// Case 1: 변수 선언 후 값 할당하지 않음
let variable1;
console.log("Case 1:");
console.log("variable1:", variable1); // 출력: undefined

// Case 2: 변수에 null 값 할당
let variable2 = null;
console.log("\nCase 2:");
console.log("variable2:", variable2); // 출력: null

// Case 3: 객체의 존재하지 않는 프로퍼티에 접근
let obj = { name: "John" };
console.log("\nCase 3:");
console.log("obj.age:", obj.age); // 출력: undefined

// Case 4: 함수에서 반환 값이 없음
function noReturnValue() {
  console.log("This function does not return anything.");
}
console.log("\nCase 4:");
console.log("noReturnValue():", noReturnValue()); // 출력: undefined

// Case 5: 함수 매개변수에 인자를 전달하지 않음
function missingArgument(param) {
  console.log("The parameter is:", param);
}
console.log("\nCase 5:");
missingArgument(); // 출력: The parameter is: undefined

// Case 6: 배열의 존재하지 않는 인덱스에 접근
let arr = [1, 2, 3];
console.log("\nCase 6:");
console.log("arr[10]:", arr[10]); // 출력: undefined

// Case 7: 함수 매개변수가 정의되지 않음
console.log("\nCase 7:");
console.log("undefinedVariable:", undefinedVariable); // 출력: ReferenceError: undefinedVariable is not defined
