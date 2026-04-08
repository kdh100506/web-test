String() // 문자형으로 변환
Number() // 숫자형으로 변환 (괄호 안에 문자가 있을시 NaN )
Boolean() // 불린형으로 변환 (false = 숫자 0, 빈 문자열, null, undefined, NaN)

const math=prompt("수학 점수는 몇점 인가요?"); // prompt로 입력 받은건 무조건 문자형
const eng=prompt("영어 점수는 몇점 인가요?");
const result_1=(math+eng)/2; // 숫자형이 아니더라도 /같은 식은 자동으로 숫자형으로 변환
const result_2=(Number(math)+Number(eng))/2;

alert(result_1);
alert(result_2);

console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
)

console.log(Number("123asdfghj")) // NaN이 됨

console.log(
    Number(true),
    Number(false)
)

console.log(
    Boolean(1),
    Boolean(123),
    Boolean('java script')
)

console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)
// false = 숫자 0, 빈 문자열, null, undefined, NaN

//주의 사항
console.log(
    Number(null), // 0이 나옴
    Number(undefined) // NaN이 나옴
)

Number(0), //false
Number('0'), //true
Number(''), // false
Number(' ') // true
