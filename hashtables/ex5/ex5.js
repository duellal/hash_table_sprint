const finder = (files, queries) =>{
    let result = []

    files.forEach(f => {
        for(let q = 0; q < queries.length; q++){
            if(f.endsWith(queries[q])){
                result.push(f)
            }
        }
    })

    return result;
}

module.exports = {finder}