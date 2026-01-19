// any 타입 - 사용하지 않을 것을 권장
let anyVar: any = 10;

anyVar = "A";
anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let anyStr: any = "B";
let numA: number = 10;
numA = anyStr;  // 할당에도 제약 X