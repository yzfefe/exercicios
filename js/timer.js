function carregar (i){
    var c = 1;
    var fim = Infinity;
    var contagem = setInterval(function(){
        if(c > fim){
            clearInterval(contagem);
        }else{
        document.getElementById("htmlp").innerHTML = c
            c = c + 1;
        }
    }, 1000);

    if(i==1){
        carregar(1);
    }
    
    
}
    

function carregar2(){

    document.getElementById("htmlp").innerHTML = " "

}
