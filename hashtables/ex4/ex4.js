const has_negatives = a => {
    let hash_table = {}

    a.forEach(num => {
        if(num > 0){
            if(hash_table[num] === 0){
                hash_table[num]++
            }else {
                hash_table[num] = 0
            }
        } 
        else if(num < 0){
            num = -num

            if(hash_table[num] === 0){
                hash_table[num]++
            }else {
                hash_table[num] = 0 
            }
        }
    })

    let doubles = []

    for(let num in hash_table){
        if(hash_table[num] > 0){
            doubles.push(parseInt(num))
        }
    }

    return doubles
}

module.exports = {has_negatives}