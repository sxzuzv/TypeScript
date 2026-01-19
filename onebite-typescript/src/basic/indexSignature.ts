// 인덱스 시그니처 (Index Signature)
// type CountryCodes = {
//     Korea: string;
//     UnitedState: string;
//     UnitedKingdom: string;
// }
//
// let countryCodes: CountryCodes = {
//     Korea: "ko",
//     UnitedState: "us",
//     UnitedKingdom: "uk"
// }


// 만약 100개의 프로퍼티(국가 코드)가 추가돼야 하는 상황이라면?
// 100개의 프로퍼티를 타입 별칭에 추가하는 것이 아닌, 인덱스 시그니처 문법을 이용한다.
type CountryCodes = {
    [key: string] : string; // key가 string 타입, value가 string 타입인 모든 프로퍼티를 포함한다.
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    // (... 약 100개의 국가)
    Brazil : 'bz'
};


// [주의] 인덱스 시그니처의 value 타입과 직접 추가한 프로퍼티의 value 타입은 호환되거나 일치
type CountryNumberCodes = {
    [key: string] : number;
    // Korea: string; 인덱스 시그니처 value 타입인 number 타입과 string 타입은 호환 불가
}