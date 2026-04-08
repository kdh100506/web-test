// alert=알려줌
// prompt=입력 받음
// confirm=확인 받음 (취소 누르면 null)

const name = prompt("이름을 입력하세요."); //HTML가서 실행
alert('환영합니다,' + name + '님');
alert(`안녕하세요 ${name}님 환영합니다.`)

const date = prompt("예약일을 입력해 주세요.", "2020-10-"); //HTML가서 실행
console.log(date)

const isAdult=confirm("당신은 성인 입니까?")
console.log(isAdult)