// never 타입
// 함수가 어떠한 값도 반환할 수 없는 상황인 경우, 함수의 반환값 타입 정의에 사용
function funA(): never {
    while (true) {} // 무한 루프를 돌기 때문에 값을 반환할 수 없다.
}

// 의도적으로 오류를 발생시키는 함수의 반환값 타입 정의에도 사용
function funB(): never {
    throw new Error();
}

// 변수 타입에 사용 시 any를 포함해 어떠한 타입의 값도 변수에 담기 불가
let anyVar: any;
let a: never;
// a = 1;
// a = null;
// a = undefined;
// a = anyVar;