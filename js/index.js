//1 Решить у = -2,4x2+5x-3 В диапазоне от -2 до 2 с шагом 0,5.
let step = 0.5;
let limit1 = -2;
let limit2 = 2;
function calculateExpression (limit1, limit2, step){
    let x;
    let y = [];
    for (x = limit1; x <= limit2; x+=step){
        y.push(+(-2.4 * x * x + 5 * x -3).toFixed(2));
    }
    return y;
}
console.log('Значение функции: ');
for (const item of calculateExpression(limit1,limit2,step)){
    console.log(item)
}

//5 Объединить два массива в один и отсортировать. * преобразовать набор вложенных массивов в один массив одного уровня вложенности
// [[0, 1], [2, 3], [4, 5]] в [0, 1, 2, 3, 4, 5]
let array1 = [1,2,3,5,7,8];
let array2 = [3,4,5,7,9,2];
let array3 = (array1.concat(array2)).sort((a, b) => {return a-b});
console.log(array3)

let doubleArray = [[0,1], [2,3], [4,5]];
let singleArray = doubleArray.reduce((a,b) => a.concat(b));
console.log(singleArray)

//4 Проверить, находится ли введенное с число в массиве * Определить количество учеников в классе, чей рост превышает средний
/*
let x = parseInt(prompt('vvedite chislo'))
let array = [3,24,7,9,43,23,12,90,7,45]
function isExist(arr, element){
    return arr.find(element => element === x);
}
console.log(isExist(array))
*/
/*
const users = [
    {
        name: 'vasya',
        height: 186,
    },
    {
        name: 'petya',
        height: 191,
    },
    {
        name: 'sasha',
        height: 195,
    },
    {
        name: 'dima',
        height: 201,
    },
    {
        name: 'andrey',
        height: 187,
    },
    {
        name: 'fedor',
        height: 186,
    },
];

function middleHeight(user){
    let countHeight = 0;
    let sumHeight = 0;
    let resMiddle
    for (let i = 0; i < user.length; i++){
        sumHeight += user[i].height;
        countHeight ++;
        resMiddle = sumHeight / countHeight
    }
    return resMiddle
}
console.log(middleHeight(users))
console.log(users.filter (elem => (elem.height > middleHeight(users))));
*/

//7. Вывести массив первых букв предложения. *Поменять порядок слов предложения на обратный
/*
let string = 'Html is amazing language in the world'
function firstChar(value, index, arr) {
    if (index === 0)
        return true;
    else
        return arr[index - 1] === " ";
}
let str1 = string.split('');
let array1 = str1.filter(firstChar).reverse();
console.log(array1)
*/

// 8 Создайте функцию-конструктор Книга. Выведите созданные объекты
/*
class Book {

    constructor(name, author, pages, madeIn) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.madeIn = 'Ukraine';
    }

    introduce() {
        console.log(`Hello, this book name is ${this.name}`);
    }
    authorName() {
        console.log(`${this.author} wrote this book`);
    }
    pagesAmount() {
        console.log(`This book has ${this.pages} pages`);
    }
    madeIn() {
        console.log(`This book was published in ${this.madeIn}`);
    }
}

const LordOfTheRings = new Book('Lord of The Rings', 'Lewis Caroll', 223);
const Inception = new Book ('Inception', 'Leonardo Di Caprio', 521)
console.log(Inception)
Inception.introduce();
LordOfTheRings.authorName()
LordOfTheRings.pagesAmount();
*/









