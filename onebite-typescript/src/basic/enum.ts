// 열거형(Enum) 타입
// 1. 숫자 열거형 타입 (숫자형 Enum)
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

const userA = {
    name: "userA",
    role: Role.ADMIN
};

const userB = {
    name: "userB",
    role: Role.USER
};

const userC = {
    name: "userC",
    role: Role.GUEST
};


// 2. 문자열 열거형
enum Language {
    Korean = "ko",
    english = "en"
}

const userD = {
    name: "userD",
    role: Role.ADMIN,
    language: Language.Korean
}