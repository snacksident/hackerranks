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
    //get the first 2 digits representing the hour
    let hourDigits = parseInt(s.slice(0,2))
    //get the last 2 digits for am/pm
    let endDigits = s.slice(s.length-2,s.length)
    if(endDigits == "PM"){
        if(hourDigits != 12){
            hourDigits += 12
        }
        if(hourDigits > 24){
            hourDigits -= 24
        }
    }
    if(endDigits == "AM"){
        if(hourDigits == 12){
            hourDigits = "00"
        }
    }
    let strippedString = s.substring(2,s.length-2)
    console.log(hourDigits.toString() + strippedString)
    return hourDigits.toString() + strippedString
}

// timeConversion('06:40:03AM')

//minimax sum - **INCOMPLETE**

function miniMaxSum(arr) {
    // Write your code here
    console.log(Math.max(...arr)) //find largest value in the array
    console.log(Math.min(...arr)) //find smallest value in the array
    let index = arr.indexOf(Math.max(...arr)); 
    let smallArray
    if (index !== -1) {
       smallArray = arr.splice(index, 1);
    }
    console.log(smallArray)
    console.log(arr.reduce((a,b)=>a+b,0))
}

// miniMaxSum([1,2,3,4,5])

//gradingstudents

function gradingStudents(grades){
    
}