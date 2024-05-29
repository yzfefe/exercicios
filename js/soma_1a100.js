function soma(){
    let soma = 0
    let calc = 1
    while( calc <= 100){
        soma += calc;
        calc++ 
    }
    document.getElementById("mn").innerHTML = (" a soma de 1 a 100 é " + soma)
}