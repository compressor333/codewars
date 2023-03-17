const countdown = () => {
    const countDate = new Date('March 26 2023 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    console.log(Math.floor(gap / day))
    console.log(Math.floor((gap % day) / hour))
    console.log(Math.floor((gap % hour) / minute))
    console.log(Math.floor((gap % minute) / second))

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
}

setInterval(countdown, 1000)


const a = 134 % 54
console.log(a)

function isPolindrome(text) {
    const arr = text.split('')
    const reversed = arr.reverse()
    const reverseToStr = reversed.join('')
    const res = reverseToStr === text
    console.log(reverseToStr)
    console.log(res)
    return res
}

isPolindrome('Hello')
isPolindrome('шалаш')

const ispldr = str => {
    const res = str === str.split('').reverse().join('')
    console.log(res)
}

ispldr('')

const shortWord = str => {
    arr = str.split(' ')
    res = arr.sort((a, b) => {
        return a.length - b.length
        console.log(a.length < b.length)
    })
    console.log(res[0])
}

shortWord('привт мир ло [po ghkg trewes kiuyu nbvcgfgdd')

function squareSum(numbers) {
    sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    console.log(sum)
}

squareSum([1, 2])


function toInitials(name) {
    const arr = name.split(' ')
    const letterarr = arr.map(el => {
        console.log(el.slice(0, 1).toUpperCase() + '.')
    })
}

toInitials('tony brasko')

function openOrSenior(data) {
    let result = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index][0] > 54 && data[index][1] > 7) {
            console.log(index)
            result.push('Senior')
        } else result.push('Open')
    }
    console.log(result)
    return result
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])


function sum(num) {
    const moduleNumber = Math.abs(num)
    const str = moduleNumber.toString()
    const arr = str.split("")
    const res = arr.reduce((cur, sum) => {
        const s = Number(cur) + Number(sum)
        console.log(s)
        return s
    }, 0)
}

sum(978658)


function cycle(n) {
    for (let a = 0; a <= n; a++) {
        console.log(n + a)
    }
}

cycle(1)


const polindrome = (string) => {

    let isPolindrome = true;
    const strAray = string.split('')
    strAray.forEach((char, idx) => {
        const test = string[string.length - idx - 1]

        console.log(string.length - idx - 1)
        if (test !== char) {
            isPolindrome = false
        }
    });
    return isPolindrome
}


lox
xol

шалашшалаш
шалашшалаш

andrey
yerdna

lol
lol

console.log(polindrome('lox'));
console.log(polindrome('lol'));
console.log(polindrome('andrey'));
console.log(polindrome('lorprolazol'));

function revStr(str) {
    const arr = str.split('')
    console.log(arr)
    arr.forEach((char, idx) => {
        // console.log(char)
        // console.log(idx)
        const test = str[str.length - idx - 1]
        console.log(test)
    });
}

revStr('Hello')

function log(str) {
    for (let i = 0; i < str.length; i++) {
        const test = str[i]
        console.log(test)
    }
}

log('hello')

const polin = (str) => {
    const arr = str.split('')
    const rev = arr.reverse()
    const revStr = rev.toString()
    return str === revStr
}

console.log(polin('hello'))

const polin2 = (str) => {
    const arr = str.split('')
    const revarr = arr.map((element, index) => {
        const test = str[str.length - index - 1]
    })
    const revStr = revarr.toString()
    return revStr === str
}
console.log(polin2('hello'))

const input = (str) => {
    const arr = str.split('')
    const res = arr.filter(element => element !== ' ')
    const string = res.join('')
    return string
}

console.log(input('8 j 8   mBliB8g  imjB8B8  jl  B'))

function repeatStr(n, s) {
    let res = []
    for (let i = 0; i < n; i++) {
        res.push(s)
    }
    const str = res.join('')
    return str
}

console.log(repeatStr(6, 'i'))

var countSheep = function (arr) {
    const res = arr.filter(element => element !== false)
    const l = res.length
    return l
}

var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

countSheep(array1)

function find(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
    return "Not found";
}

function find(array, element) {
    const ar = array.findIndex(el => el === element)
    if (ar === -1) { return 'Not found' } else { return ar }
}

const find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";

function test(arr, idx) {
    let i = 0

    let res = []
    arr.map(el => res.push(arr[i++]))
    return res
}

var array = [2, 3, 5, 7, 11];
console.log(array.indexOf(5))
console.log(array.includes(11))

console.log(test(array, 4))

console.log(find(array, 2))
console.log(find(array, 3))
console.log(find(array, 5))
console.log(find(array, 7))
console.log(find(array, 11))
console.log(find(array, 12))

function numberToPower(number, power) {

    return number ** power
}
console.log(numberToPower(10, 4))

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

const res = items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase

    return nameB.length - nameA.length
})

console.log(res)

function strCount(str, letter) {
    const arr = str.split('')
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === letter) {
            res.push(letter)
        }
    }
    return res.length
}

console.log(strCount('Hello', 'o')) //1
console.log(strCount('Hello', 'l')) //2
console.log(strCount('Alprllalozaam', 'l')) //2


function solution(str) {
    const arr = str.split('')
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const revArr = str[arr.length - i - 1]
        res.push(revArr)
    }
    return res.join('')
}

solution('hello')


function toInitials(str) {
    const arr = str.split(' ')
    const first = arr[0]
    const second = arr[1]
    console.log(first[0].toUpperCase() + '.' + ' ' + second[0].toUpperCase() + '.')
}

toInitials('hello world')

function reverseWords(str) {
    const words = str.split(' ')
    const map = words.map((el, idx) => {
        const word = words[words.length - idx - 1]
        return word
    });
    return map.join(' ')
}

console.log(reverseWords("hello world!"))

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
        const arr = birds.filter(el => {
            return (el != geese[0])  && (el != geese[1])  && (el != geese[2])  && (el != geese[3])  && (el != geese[4])
        })
        return arr
  };

  console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

function addLength(str) {
    const arr = str.split(' ')
    const res = arr.map(el => {
        return el + ' ' + el.length
    })
    return res
}

console.log(addLength('you will win')) //["you 3", "will 4", "win 3"]

function grow(x){
     const g = x.reduce((acc, el) => 
         acc * el,)
    return g
}
console.log(grow([2, 2, 2, 2, 2, 2]))

function saleHotdogs(n){
    return n < 5 ? 100 * n : (n >= 5 && n <= 9) ? 95 * n : n >= 10 ? 90 * n : 'hello'
  }
console.log(saleHotdogs(1))
console.log(saleHotdogs(2))
console.log(saleHotdogs(3))
console.log(saleHotdogs(4))
console.log(saleHotdogs(5))
console.log(saleHotdogs(6))
console.log(saleHotdogs(7))
console.log(saleHotdogs(8))
console.log(saleHotdogs(9))
console.log(saleHotdogs(10))

var ar = [1, 2, 4]

function pushElement(arr){
    var el=1
    const res = arr.push(el)
    return res
  }

console.log(  pushElement(ar)
)

var fruits = [
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "grape",
    "orange",
    "grape",
    "apple",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "kiwi",
    "banana",
    "kiwi",
    "apple",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "pineapple",
    "cucumber",
    "orange",
    "apple",
    "orange",
    "grape",
    "orange",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "apple",
    "pear",
    "kiwi",
    "banana",
    "kiwi",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "apple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "cucumber",
    "orange",
    "grape",
    "cherry",
    "apple",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "apple",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "apple",
    "grape",
    "orange",
    "grape",
    "cherry",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "apple",
    "kiwi",
    "banana",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple",
  ];


function SubtractSum(n){
    const str = n.toString()
    const arr = str.split('')
    const sum = arr.reduce((sum, el) => {
        return parseInt(sum) + parseInt(el)
    })
    const idx = (n - sum) - 1
    const int = idx
    console.log(int)
     if(fruits[int] !== undefined) {
        return fruits[int]
     } else {
        console.log('iter')
        return SubtractSum(idx)
     }
  }

console.log(SubtractSum(3232))

function validate(string) {

  const stack = []

  const openingBrackets = ['{', '[']
  const closingBrackets = ['}', ']']

  const stringArray = string.split('') 

  stringArray.forEach(bracket => {
      if (openingBrackets.includes(bracket)) {
          stack.push(bracket)
      }
      if(closingBrackets.includes(bracket)){

          const bracketIndex = closingBrackets.indexOf(bracket)
          const lastStackBracket = stack[stack.length - 1]
          if(openingBrackets[bracketIndex]===lastStackBracket){
              stack.pop()
          }else{
              stack.push(bracket)
          }
      }
  });

  if (stack === []) {
      return true
  } else {
      return false
  }
}


console.log(validate('{[][{}{}{]}')) // true
console.log(validate('[{[][{}{}{}]}]')) // false
console.log(validate('[{}]]}]}')) // false

const q = prompt('')
const key = 'AIzaSyDL06aBH_O5VUNH94BbDh91mwXlB-0n354'
const url = `https://www.googleapis.com/books/v1/volumes?q=${q}+inauthor:keyes&${key}=yourAPIKey`

async function get(url) {


    const res = await fetch(url)
    const data = await res.json()
    const volume = data.items[0]
    console.log(volume.volumeInfo)
}

get(url)



