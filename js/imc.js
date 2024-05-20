function imc() {
    let altura = +document.getElementById("altura").value
    let peso = +document.getElementById("peso").value
    let imc = peso/(altura * altura)

    document.getElementById("_peso").innerHTML = imc

if (imc <= 17) {
     document.getElementById("_imc").innerHTML = ("Você está muito abaixo do peso ideal")
 }
    
else if ((imc >=17) && (imc <=18,49)) { 
    document.getElementById("_imc").innerHTML = ("Você está abaixo do peso ideal")

 }
else if ((imc >=18,5) && (imc <=24,99)) { 
    document.getElementById("_imc").innerHTML = ("Você com peso normal")
}
else if ((imc >=25) && (imc <=29,99)) { 
    document.getElementById("_imc").innerHTML = ("Você está acima do peso")

}
else if ((imc >=30) && (imc <=34,99)) { 
    document.getElementById("_imc").innerHTML = ("Você está na obesidade grau 1")
}

else if ((imc >=35) && (imc <=39,99 )) { 
    document.getElementById("_imc").innerHTML = ("Você está na obesidade grau 2")
}

else {
    document.getElementById("_imc").innerHTML = ("Você na obesidade grau 3")

}}