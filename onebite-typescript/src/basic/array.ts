// 배열 타입

// 정의
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b", "c"];
let boolArr: Array<boolean> = [true, false, false];

// 다양한 타입 요소를 갖는 배열 타입 정의
let multiArr: (number | string)[] = [1, "a"];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
];