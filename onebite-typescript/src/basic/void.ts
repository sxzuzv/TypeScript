// void 타입: 반환값이 없는 함수의 반환값 타입을 정의할 때 사용
function fun1(): void {
    console.log("void");
}

// 변수 타입에도 사용 가능 (값으로 undefined 이외의 다른 타입 담기 불가)
let a: void;
a = undefined;