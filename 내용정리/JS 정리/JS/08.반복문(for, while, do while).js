// for
for(i=0; i<10; i++){
    console.log(i+1);
}

// while
i=0
while(i<10){
    console.log(i+1);
    i++;
}

// do while
i=0
do{
    console.log(i+1);
    i++
}while(i<10)

// break
// while(true){
//     let answer=confirm("계속 하시겠습니까?");
//     if(!answer){
//         break;
//     }
// }

// continue
// Only 짝수
for(i=0; i<10; i++){
    if(i%2){
        continue
    }
    console.log(i)
}
