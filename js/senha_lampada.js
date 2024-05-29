function msg(){
    let lamp = document.getElementById('lamp')
    let senha = document.getElementById('senha').value
    let senha_correta = "aaaaa"

    if(senha==senha_correta && lamp.src.match("img/desligada.jpg")){
        lamp.src = ("img/ligada.jpg")
    }
}