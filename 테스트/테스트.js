while(true){
    const id=prompt("아이다가 무엇입니까?")
    const password=prompt("비밀번호가 무엇입니까?")
    if(id==="kdh100506" && password==="pp0506pp#*"){
        alert("정상적으로 로그인 되었습니다.")
        break
    } else{
        if(id!="kdh100506" && password!="pp0506pp#*"){
            alert("아이디, 비밀번호가 잘못 되었습니다")
        } if(id!="kdh100506"){
            alert("아이디가 잘못되었습니다.")
            retry=confirm("다시 로그인 하시겠습니까?")
            if(retry===false){
                continue
            }
        } if(password!="pp0506pp#*"){
            alert("비밀번호가 잘못되었습니다.")
            retry=confirm("다시 로그인 하시겠습니까?")
            if(retry===false){
                continue
            }
        }
    }
}