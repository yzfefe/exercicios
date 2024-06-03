setInterval(function msg(){
    let foto = document.getElementById('foto')

    let data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    document.getElementById("exibir").innerText = hr + ":" + min + ":" + sec

    
    if((hr>=6) && (hr<=10)){
        foto.src = "img/tarde.jpg"
    }else if((hr>=12) && (hr<=23)){
        foto.src = "img/noite.jpg"
    }

})
    
