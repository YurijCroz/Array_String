//!1 Отфильтруйте отрицательные элементы в массиве, оставив только положительные

let array1=[10,20,30,-40,-50,-60,70,80,90];
//===1.1===>
let arrayNew1 = array1.filter((element) => element>0);
console.log(arrayNew1);

//!2 Найдите сумму элементов массива которые меньше 100 по значению

let array2=[200,300,20,40,60,80,100,120];
//===2.1===>
let arraySum = array2.filter((el) => el<100).reduce((preValue, curValue) => preValue + curValue);
console.log(arraySum);

//!3 Уменьшите каждый элемент массива на 3%

let array3=[200,300,20,40,60,80,100,120];
//===3.1===>
let arrayNew3 = array3.map((el) => el-=(el*=0.03));
console.log(arrayNew3);

//!4 Если все элементы массива меньше 100 увеличьте их на 5%

let array4=[10,20,30,40,50,60,70,80,90];
//===4.1===>

function magnifier(array){
    let arrayNew
    array.every(el => el<100)
    ? (arrayNew=array.map(el => el+=(el*=0.05)), console.log(arrayNew))
    : console.log('Epic Fail')
}
magnifier(array4);
magnifier(array3);


//!5 Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное")

let word1='tenet', word2='array';

function palindrome(word) {
    word === word.split('').reverse().join('')
    ? console.log('Да')
    : console.log('Нет')
}
palindrome(word1);
palindrome(word2);


//!6 Соедините две строки в одну и переверните наоборот

let str1='Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let str2='Dolorem enim fuga sit aliquid voluptatem';
//===6.1===>

let strNew = str1.split(' ').concat(str2.split(' ')).reverse().join(' ');
console.log(strNew);


//!7* Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр.

let str3='dolorem enim fuga sit aliquid voluptatem';
//===7.1===>

function firstLetterInUppercase(string) {
    let newString=string.split(' ').map(el => el[0].toUpperCase() + el.substring(1)).join(' ')
    console.log(newString);
    return newString;
}
firstLetterInUppercase(str3);

//!8* Вывести индексы минимальных элементов массива

let array5=[200,300,20,40,60,80,100,120];
//===8.1===>

function indicesOfMinimumElements(array, min) {
    let minIndices=[];
    array.forEach((el, i) => {
        if (el<min) {
            minIndices.push(i);
        }
    })
    console.log(minIndices);
    return minIndices;
}
indicesOfMinimumElements(array5, 70);
