let num = '';
for (i = 10; i <= 20; i++){
    num += i + ',' + ' '
}
console.log(num, 'числа від 10 до 20')

let expon = ''
for (i = 10; i <= 20; i++) {
    expon += i ** 2 + ',' + ' '
}
console.log(expon, 'квадрати чисел від 10 до 20')

let mult = ''
for (i = 1; i <= 9; i++) {
    mult += 7 * i + ',' + ' '
}
console.log(mult, 'множення на 7')

let sum = 0
for (i = 1; i <= 15; i++) {
    sum += +i
}
console.log(sum,'сума всіх цілих чисел від 1 до 15')

let mult2 = 1
for (i = 15; i <= 35; i++) {
    mult2 = mult2 * i
}
console.log(mult2, 'добуток усіх цілих чисел від 15 до 35.')

let avarage = 0
for (i = 1; i <= 500; i++) {
    avarage += (+i) /500
}
console.log(avarage, 'середнє арифметичне всіх цілих чисел від 1 до 500.')

let evenNum = 0
for (i = 2; i <= 6; i = i + 2) {
    evenNum += +i
}
console.log(evenNum, 'сума лише парних чисел в діапазоні від 30 до 80')


let oddNum = ''
for (i = 100; i <= 200; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    oddNum += i + ','

}
console.log(oddNum, 'всі числа в діапазоні від 100 до 200 кратні 3')