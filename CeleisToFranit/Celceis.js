function method()
{
    let cel = Number(document.getElementById("input").value)
    let fran = (cel * 9 / 5) + 32
    let result = document.getElementById("result")
    result.innerHTML = fran.toFixed(2)
}