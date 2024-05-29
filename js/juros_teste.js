function msg(){
    let valor = +document.querySelector("#valor_ini").value
    let taxa = +document.getElementById("taxa").value
    let tempo = +document.getElementById("tempo").value

    let i = taxa/100
    let M = valor*(1+i)**tempo
    document.getElementById("exibir").innerHTML = M.toFixed(2)
}