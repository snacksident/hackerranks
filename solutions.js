// ***** 4/28/2022 ****

/**
 * NUMBER LINE JUMPS
 */
 function kangaroo(x1, v1, x2, v2) {
    if (v1 > v2){
        const remainder = (x1 - x2) % (v2 - v1)
        if(remainder == 0){
            return "YES"
        }
    }
    return "NO"
}

/**
 * migratory birds
 */
const birds = (arr) => {
    const hash = {}
    arr.forEach(bird=>{
        if(hash[bird]){
            hash[bird]++
        }else{
            hash[bird] = 1
        }
    })
    let mostBirds = 0
    for(const bird in hash){
        if(hash[bird] > mostBirds){
            if(bird > mostBirds){
                mostBirds = bird
            }
        }
    }
    return mostBirds
}
// console.log(birds([1,1,1,2,2,3,4,4,4]))

/**
 * plusminus - find % of
 */
function plusMinus(arr) {
    // Write your code here
    //create hash object to hold data
    const hash = {
        pos: 0,
        neg: 0,
        zero: 0
    }
    //fill out hash object
    arr.forEach(score=>{
        console.log(score)
        if(score == 0){
            hash.zero++
        }else if(score >= 1){
            hash.pos++
        }else if(score<=1){
            hash.neg++
        }
    })
    //break values down into format for problem (6 digits of decimal)
    hash.pos = (hash.pos / arr.length).toFixed(6)
    hash.neg = (hash.neg / arr.length).toFixed(6)
    hash.zero = (hash.zero / arr.length).toFixed(6)
    //log results out in requested format
    console.log(hash.pos)
    console.log(hash.neg)
    console.log(hash.zero)
}   
// plusMinus([-4, 3, -9, 0, 4, 1])

function timeConversion(s) {
    // Write your code here
    //if AM and time starts with 12
        //change 12 to 00, remove AM
    //elseif AM
        //remove AM off
    //elseif PM and starts with 12
        //remove PM
    //else
        //add 12 to first 2 digits, remove P

}

// timeConversion('06:40:03AM')

//minimax sum - **INCOMPLETE**

function miniMaxSum(arr) {
    // Write your code here
    let total = arr.reduce((a,b)=>a+b,0)
    console.log(total - Math.max(...arr), total - Math.min(...arr))
    // console.log(total - Math.max(...arr))

}

// miniMaxSum([1,2,3,4,5])

//lonely integer
function lonelyinteger(a) {
    // Write your code here
    const hashTable = {}
    a.forEach(num => {
        if(hashTable[num]){
            hashTable[num]++
        }else(
            hashTable[num] = 1
        )
    })
    for(const keys in hashTable){
        if(hashTable[keys] == 1){
            return keys
        }
    }
}

// lonelyinteger([1,2,3,4,3,2,1])

function diagonalDifference(arr){
    const len = arr.length
    let diag1 = 0
    let diag2 = 0
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(i===j){
                diag1 += arr[i][j]
            }

            if(i + j === len - 1){
                diag2 += arr[i][j]
            }
        }
    }
    return Math.abs(diag1 - diag2)
}

// diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])

function countingSort(arr) {
    // Write your code here
    let returnArr = Array(100).fill(0)
    for(let i = 0; i < arr.length; i++){
        returnArr[arr[i]] ++
    }
    console.log(returnArr)
}
// countingSort("63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33".split(' '))

function gradingStudents(grades) {
    grades.forEach((grade, i)=>{
        if( grade >= 38 ) {
            if(grade < 40){
                grades[i] = 40
            }else{
                //split into 2 digits
                //check value of second digit
                    //if 2nd digit is 3 or 4, change to 5.
                    //if 2nd digit is 8 or 9, change to 0, 1st digit++
                gradeString = grade.toString().split()
                console.log(gradeString)
                if(gradeString.split()[1] == 3 || gradeString.split()[1] == 4){
                    gradeString.split(1) = 5
                } else {
                    
                }
            }
        }
    })
    console.log(grades)
}

// gradingStudents([73,67,38,33])

function pickingNumbers(a){
    console.log(a)
}

// pickingNumbers([ 4, 6, 5, 3, 3, 1 ])


function countApplesAndOranges(s,t,a,b,apples,oranges){
    //count how many ${apples} and ${oranges} fall between s and t.
    let samsApples = 0
    let samsOranges = 0
    const isInTheYard = (t,s,fruitLocation) =>{
        if(fruitLocation >= s && fruitLocation <= t){
            return true
        }else{
            return false
        }
    }
    console.log(`apple tree location: ${a}`)
    apples.forEach(apple=>{
        if(isInTheYard(t,s,(apple + a))){
            samsApples++
        }
    })
    oranges.forEach(orange=>{
        if(isInTheYard(t,s,(orange + b))){
            samsOranges++
        }
    })
    console.log(samsApples)
    console.log(samsOranges)
}

// countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])

function getTotalX(a,b){
    console.log(a)
    console.log(b)
    let count = 0
    b.forEach(numB=>{
        a.forEach(numA=>{
            if(numB % numA === 0){
                console.log(`${numA} is divisble by ${numB} !!`)
            }
        })
    })
}
// getTotalX([2,4],[16,32,96])

function birthday(s, d, m) {
    // Write your code here
    let count = 0
    //break array down into bits of ${m} length - try to find the ones that add up to ${d}
    for(let i = 0; i < s.length; i++){
        if(s.slice(i,(i+m)).reduce((a,b)=>a+b) === d){
            count++
        }
    }
    return count
}

// birthday([1,2,1,3,2],3,2)

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    // break array down into pairs
        //find pairs, that when combined, are divisible by k evenly
    let count = 0
    for(let i = 0; i < ar.length; i++){
        for(let j = 0; j < ar.length; j++){
            if((i<j) && (ar[i] + ar[j]) % k === 0){
                count++
            }
        }
    }
    return count
}

// divisibleSumPairs(6,3,[ 1, 3, 2, 6, 1, 2 ])

function insertionSort2(n, arr) {
    let swapped = false
    let currentNum = arr[1]
    // Write your code here
    console.log(arr)
    arr.push(n)
    console.log(arr)
    while(!swapped){
        for(let i = 0; i < arr.length; i++){
            if(currentNum < arr[i]){
                console.log(`swap em`)
                swapped = true
            }
        }
    }
}

// insertionSort2(6,[ 1, 4, 3, 5, 6, 2 ])

function hurdleRace(k, height) {
    console.log(Math.max(...height))
    if(k > Math.max(...height)){
        return 0
    }else{
        return Math.max(...height) - k
    }
}