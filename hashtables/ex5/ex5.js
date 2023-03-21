const finder = (files, queries) =>{
    let hash_table = {}
    let result = []

    queries.forEach(q => {
        hash_table[q] = []
    })

    files.forEach(f => {
        for(let query in hash_table){
            if(f.endsWith(query)){
                result.push(f)
            }
        }
    })

    return result;
}

module.exports = {finder}