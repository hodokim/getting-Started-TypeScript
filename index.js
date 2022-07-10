// 타입 지정
var userName = 'kim';
// name 속성은 옵션임을 나타내는 '?' 기호
var userName1 = { name: 'kim' };
// 타입 지정의 or 조건 string[] | number 등 또한 가능
var userName2 = 123;
var userName3 = 1234;
//함수에도 return의 타입을 지정할 수 있다. 여기서 이 함수는 반드시 number 타입을 반환 해야한다.
function myfunc(x) {
    return x * 2;
}
var john = [123, true];
var userName4 = {
    name: 'kim',
    age: '23'
};
//class 의 타입 지정하기
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
