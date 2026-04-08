// || 는 or
// && 는 and
// ! 는 not

name="Mike";
age=30;

if(name==='Tom' || age>19){
    console.log('통과');
}

if(name==='Tom' && age>19){
    console.log('통과');
} else{
    console.log('돌아가')
}

age=19;
isage= age>19;
if(!isage){
    console.log('돌아가...')
}

gender='F';
name='Jane';
isAdult=true;

// if((gender==='M' && name==='Mike') || isAdult===true) 와 같음
if(gender==='M' && name==='Mike' || isAdult===true){ // &&(and)가 ||(or)보다 연산처리가 빠르기 때문에 true
    console.log('통과')
} else{
    console.log('돌아가')
}

if(gender==='M' && (name==='Mike' || isAdult===true)){ // 괄호로 ||를 묶어 줬기 때문에 false
    console.log('통과')
} else{
    console.log('돌아가')
}






