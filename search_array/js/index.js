const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// const array = [1,2,3,4,-5]
console.log(array)

const sum = array.reduce((accum, item) => {
    if (item > 0){ 
        accum += item
    }
    return accum
}, 0)
console.log(sum, 'сума позитивних елементів масиву')

const positive = array.filter((number) => number > 0)
console.log(positive, 'позитивні елементів (filter)')
console.log(positive.length, 'кількість позитивних елементів')

const positiveNum = array.reduce((accum, item) => {
    if (item > 0) {
        accum =accum.concat(item)
    }
    return accum
}, [])
console.log(positiveNum, 'позитивні елементів (reduce)')
console.log(positive.length, 'кількість позитивних елементів')


const min = array.reduce((accum, item) => {
    if (accum > item) {
        return item
    }
    else {
        return accum
    }
}, array[0])
console.log(min, 'мінімальний елемент масиву(reduce)')

const indexMin = array.reduce((accum, item, index) => {
    if (item < accum[1]) {
        return [index, item]
    }
    else {
        return accum
    }

}, [0,array[0]])
console.log(indexMin, 'порядковий номер мінімального елементу масиву (reduce)')

const max = array.reduce((accum, item) => {
    if (accum < item) {
        return item
    } 
    else {
        return accum
    }
}, array[0])
console.log(max, 'максимальний елемент масиву (reduce)')

const indexMax = array.reduce((accum, item, index) => {
    if (item > accum[1]) {
        return [index, item]
    }
    else {
        return accum
    }
}, [0,array[0]])
console.log(indexMax, 'порядковий номер максимального елементу масиву')

const negativeEl = array.reduce((accum, item) =>{
    if (item < 0){
        return accum.concat(item)
    }
    else {
        return accum
    }

}, [])
console.log(negativeEl, 'масив негативних елементів (reduce)')
console.log(negativeEl.length, 'кількість негативних елементів')


const mult = array.reduce((accum, item) => {
    if (item > 0){
        accum *= item
    }
    return accum
}, 1)
console.log(mult, 'добуток позитивних елементів (reduce)')



