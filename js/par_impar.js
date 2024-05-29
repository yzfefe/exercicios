function msg(){
    let n = document.getElementById("receber").value

    if(n%2==0){
        document.getElementById("exibir").innerHTML = "O número é par"
    }else{
        document.getElementById("exibir").innerHTML = "O número é ímpar"
    }
}