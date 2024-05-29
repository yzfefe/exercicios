function msg() {
    let lamp = document.getElementById("lampada")
    let interruptor = document.getElementById("int_lig")
    document.body.style.backgroundColor = "black"
    
    if (lamp.src.match("img/desligada.jpg")){
        lamp.src = "img/ligada.jpg"
        interruptor.src = "img/interruptor_ligado.jpg"
        document.body.style.backgroundColor = "white"
        document.getElementById("butao").innerHTML = "apagar"

    }
    else{
        lamp.src = "img/desligada.jpg"
        interruptor.src = "img/interruptor_desligado.jpg"
        document.body.style.backgroundColor = "black"
        document.getElementById("butao").innerHTML = "acender"
    }

}