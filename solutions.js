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
console.log(birds([1,1,1,2,2,3,4,4,4]))