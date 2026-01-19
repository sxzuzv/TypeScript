// Unknown 타입
let unknownVar: unknown;
unknownVar = "";
unknownVar = () => {};
unknownVar = 1;


let num: number = 10;
// num = unknownVar; unknown 타입의 값은 어떤 타입의 변수에도 저장 불가
// unknownVar * 2;   unknown 타입의 값은 어떤 연산에도 참여 불가, 어떤 메서드도 사용 불가

// Unknown 타입의 값을 number 타입의 값으로 취급하면서 연산을 수행하려면?
// 조건문을 이용해 unknownVar의 값이 number 타입의 값임을 보장해준다.
if (typeof unknownVar === "number") {
    unknownVar * 2;
}