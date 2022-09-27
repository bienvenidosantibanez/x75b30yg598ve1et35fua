

// password generator

function getRandomLower() {
    let randOutput = Math.floor(Math.random() * 26) + 97
    let char = String.fromCharCode(randOutput)
    return String.fromCharCode(randOutput)
}

console.log(Math.floor(Math.random() * 26) + 97)

console.log(getRandomLower())


// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function getRandFromString(lengthInput) {
    let result = ''
    let stringInput1 = 'abcdefghijklmnopqrstuvwxyz1234567898888899999'
    let stringInput2 = 'abcdefghijklmnopqrstuvwxyz1234567898888899999'
    let stringInput = stringInput1.concat(stringInput2)
    let strLen = stringInput.length

    for (let i = 0; i < lengthInput; i++) {
        result = result + stringInput.charAt(Math.floor(Math.random() * strLen))
    }
    return result

}

console.log(getRandFromString(15))