
function calculo(){
    let e0p1=document.querySelector('input.e0p1')
    let e0p2=document.querySelector('input.e0p2')
    let l0p1=Number(e0p1.value)
    let l0p2=Number(e0p2.value)
    //window.alert(l0p1)
    //window.alert(l0p2)
    let e0m=document.querySelector('p.e0m')
    let m0=0
    m0=(l0p1+l0p2)/2

    //window.alert(m0)

    if (m0>=6){
        e0m.innerHTML=m0
        e0m.document.style.color='green'
    }else{
        e0m.innerHTML=m0
        e0m.document.style.color='red'
    }

}