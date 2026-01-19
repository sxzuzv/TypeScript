// 객체 타입

// (1) object 타입으로 정의
import * as string_decoder from "node:string_decoder";

let userA: object = {
    id: 1,
    name: "dev"
};
// user.id; 'object' 타입에 'id' 프로퍼티를 찾을 수 없다.

// (2) 객체 리터럴 타입으로 정의
let userB: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "dev"
};
userB.id;   // 1


// * 특수한 프로퍼티 정의 - 선택적 프로퍼티 (Optional Property)
let userC: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "햄햄"
};

userC = {
    name: "햄토리" // id는 선택적 프로퍼티, 생략 가능
};


// * 특수한 프로퍼티 정의 - 읽기 전용 프로퍼티 (Readonly Property)
let userD: {
    id?: number;
    readonly name: string;
} = {
    id: 3,
    name: "쿠쿠"
};
// userD.name = "햄햄"; ERROR! name은 읽기 전용 프로퍼티