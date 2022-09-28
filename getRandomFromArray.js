
// https://www.programiz.com/javascript/examples/get-random-item

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [
        'tomato',
        'orange',
        'DodgerBlue',
        'MediumSeaGreen',
        'SlateBlue',
        'AliceBlue',
        'Aquamarine',
];

const result = getRandomItem(array);
console.log(result);
console.log(typeof(result));