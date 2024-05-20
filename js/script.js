function calc(){
    let cap = document.getElementById("capita").value
    let tax = (document.getElementById("taxa").value) / 100
    let tem = document.getElementById("tempo").value
    let J = cap * (1 + tax) ** tem

    document.getElementById("res").innerHTML = `R$: ${J.toFixed(2).replace(".", ",")}`
}
