// 튜플 타입

// 정의
// (1) 길이가 2로 고정된 2개의 number 타입 요소를 갖는 튜플
let tup1: [number, number] = [1, 2];
// (2) 길이가 3으로 고정된 number, string, boolean 타입 요소를 갖는 튜플
let tup2: [number, string, boolean] = [1, "a", true];

// 튜플 활용 예시
// (1) 자바스크립트에서는 이러한 문제를 확인할 수 있는 방법 X
const usersJ = [
    ["userA", 1],
    ["userB", 2],
    ["userC", 3],
    ["userD", 4],
    [5, "userE"]    // <- 추가된 사용자
]

// (2) 타입스크립트 튜플 활용
const usersT: [string, number][] = [
    ["userA", 1],
    ["userB", 2],
    ["userC", 3],
    ["userD", 4],
    // [5, "userE"]    // <- 오류 빠르게 수정 가능
]