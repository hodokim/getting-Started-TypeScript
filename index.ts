// 타입 지정
let userName :string = 'kim';

// name 속성은 옵션임을 나타내는 '?' 기호
let userName1 : {name? : string } = {name : 'kim'};

// 타입 지정의 or 조건 string[] | number 등 또한 가능
let userName2 : string | number = 123;

//타입 저장하기
type MyType = string | number;

let userName3 : MyType = 1234;


//함수에도 return의 타입을 지정할 수 있다. 여기서 이 함수는 반드시 number 타입을 반환 해야한다.
function myfunc(x :number) :number {
    return x * 2
}

// array 의 tuple 타입
type Member = [number, boolean];
let john : Member = [123, true];


//객체의 속성 타입을 일괄 적용하고 싶을 때
type Member1 = {
    [key : string] : string,
}
let userName4 : Member1 = { 
    name : 'kim',
    age : '23'
}

//class 의 타입 지정하기
class User {
    name : string;
    constructor(name : string){
        this.name = name;
    }
}

