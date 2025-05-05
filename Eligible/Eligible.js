let choice = document.getElementById("input").value
let result = document.getElementById("result")
console.log(choice)
switch(choice)
{
    case 'Illiterate':

    case 'High School':{
        let ssc = parseFloat(document.getElementById("ssc").value)
        let hsc = [parseFloat(document.getElementById("hsc").value)
        if(ssc === pass && hsc == pass && ssc <= 75 && hsc <= 80)
        {
            result.innerHTML = "Your Eligible"<br>"Jobs : Clerk,Agent"
        }
        else
        {
            let result = document.getElementById("result")
            result.innerHTML = "Not Eligible"
        }
        break
    }

    case 'Undergraduate';{
        let year = parseInt(document.querySelector('#year').value)
        if(year >= 17)
        {
            result.innerHTML = "Your Eligible"<br>"Jobs : SoftwareDeveloper,Bank Clerk"
        }
        else
        {
            result.innerHTML = "Not Eligible"
        }
        break
    }

    case 'postGraduate':
    {
        let years = parseInt(document.querySelector('#years').value)
        if(year >= 23)
        {
            result.innerHTML = "Your Eligible"<br>"Project Manager,Lecture,Research Associate"   
        }
        else
        {
            result.innerHTML = "Not Eligible"
        }
        break
    }  

    case 'Doctrate':
        {
        
        }
}