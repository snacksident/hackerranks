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
    //hash to store counts of birds in
    const hash = {}
    //loop over array of birds, logging the count in the hash
    arr.forEach(bird=>{
        if(hash[bird]){
            hash[bird]++
        }else{
            hash[bird] = 1
        }
    })
    console.log(hash)
    let mostBirds = 0
    //loop over hash looking for the one that has the most occurances
    for(const bird in hash){
        console.log(`the bird is currently ${bird}`)
        //if the hashes value is more than the current highest count of birds
        if(hash[bird] > mostBirds){
            console.log(`assigning mostBirds to bird = ${mostBirds} is now ${bird}`)
            mostBirds = bird
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
    // console.log(grades)
    //if grade is below 40, do nothing
    //if 2nd digit is less than 5 and greater than 3, change digit to 5.
    //if 2nd digit is 8 or 9, change to 0 and increase first digit by 1.
    grades.forEach(grade=>{
        let splitGrade = grade.toString().split('')
        if(grade < 40){
            //do nothing
        }else if(splitGrade[1] < 5 && splitGrade[1] >=3){
            console.log(`found one that needs to be changed: ${grade}`)
            //change strings back to ints, do the math
            splitGrade[1] = 5
            console.log(grade)
        }else if(splitGrade[1] <= 9 && splitGrade[1] >=8){
            console.log(`found one that needs to be changed: ${grade}`)
        }
        console.log(splitGrade.join())
    })
}

// gradingStudents([73,67,38,33])

function pickingNumbers(a){
    console.log(a)
}

pickingNumbers([ 4, 6, 5, 3, 3, 1 ])