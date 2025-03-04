let score=1000
console.log("Your bill amout is Rs."+score);

function convert()
{
    const cm=Number(document.getElementById("input").value)
    const inchval=cm/2.54
    const result=document.getElementById("result")
    result.innerHTML=inchval.toFixed(2) + "inches"
}
function franit()
{
    const celcius = Number(document.getElementById("input").value);
    const fran = (celcius * 9/5) + 32;
    const ans = document.getElementById("ans");
    ans.innerHTML = fran.toFixed(2) + " Fahrenheit";
}