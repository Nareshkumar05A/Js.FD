const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('ful').appendChild(resultdiv)

button.addEventListener('click', DisplayStates)

function DisplayStates() {
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value

    let population = 0, literacyRate = 0, language = ""

    switch (city) {
        case 'Bangaluru':
            population = 56262628
            literacyRate = 88
            language = 'Kannada'
            break

        case 'Chennai':
            population = 98761246
            literacyRate = 100
            language = 'Tamil'
            break

        case 'Delhi':
            population = 5623762
            literacyRate = 43
            language = 'Hindi'
            break

        default:
            population = 'Unknown'
            literacyRate = 'Unknown'
            language = 'Unknown'
            break
    }

    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    console.log(text)
    document.getElementById('result').innerHTML = text
}
