//String
console.log("String")

const name="Mike";
const age=30;

const name1="Mike";
const name2='Mike';
const name3=`Mike`;

const message1="I'm boy.";
const message2='I\'m boy.';

const message3=`My name is ${name}`;
console.log(message3);

const message4=`나는 ${age+1}살 입니다.`;
console.log(message4);

//Number
console.log("Number")

//const age=30;
const PI=3.14;

console.log(1+2) // 더하기
console.log(10-3) // 빼기
console.log(3*2) // 곱하기
console.log(6/3) // 나누기
console.log(6%4) // 나머지

const x=1/0;
console.log(x) //무한이 나옴(Infinity)

//const name="Mike";
const y=name/2;
console.log(y) //숫자가 아님(NaN)

//Boolean
console.log("Boolean")

const a= true;
const b=false;

// const name="Mike";
// const age=30;

console.log(name =="Mike");
console.log(age>40);

//null & nudefind
console.log("null & nudefind")

let age_let;
console.log(age_let); //찾을수 없음 undefind

let user=null; //user은 존재 하지 않음

//typeof
console.log("typeof")

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);
console.log(typeof undefind);
