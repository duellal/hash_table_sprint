const intersection = (arrays) => {
    let hash_table = {}

    arrays.forEach(arr => {
        arr.forEach(item => {
            if(hash_table[item]){
                hash_table[item]++
            }
            else{
                hash_table[item] = 1
            }
        })
    })

    let numInter = []

    for(let num in hash_table){
        if(hash_table[num] > 1){
            numInter.push(parseInt(num))
        }
    }
    
    return numInter;
}

module.exports = {intersection}