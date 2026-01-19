// 타입 별칭 (Type Alias)
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

// 타입 별칭을 새로운 변수의 타입 정의 시 타입 주석과 함께 이용
let userA: User = {
    id: 1,
    name: "신수진",
    nickname: "devszn",
    birth: "9999.99.99",
    bio: "안녕하세요",
    location: "대구광역시"
};
let userB: User = {
    id: 2,
    name: "진수신",
    nickname: "devszn",
    birth: "9999.99.99",
    bio: "안녕하세요",
    location: "대구광역시"
};