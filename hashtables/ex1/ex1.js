const get_indices_of_item_weight = (weight, length, limit) =>{
    const hash_weights = {}
    
    weight.forEach((num, index) => {
        if(Object.keys(hash_weights)[0] == num){
            hash_weights[num].push(index)
        } else{
            hash_weights[num] = [index]
        }
    })

    let sumIndices = []

    for(let weight in hash_weights){
        let sumToLimit = limit - weight

        if(hash_weights[weight].length > 1){
            let index0 = hash_weights[weight][0]
            let index1 = hash_weights[weight][1]

            if(weight == sumToLimit){
                sumIndices.push(index0, index1)
            }
        } else if(hash_weights[sumToLimit] < length - 1){
            let index = hash_weights[weight][0]
            sumIndices.push(index)
        }
    }

    if(sumIndices.length === 0){
        return null
    }
    
    return sumIndices.sort((a, b) => b-a)
}

module.exports = {get_indices_of_item_weight}