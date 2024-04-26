const getEvolutionChain = (obj, arr) => {
    for(let key in obj){
        if(key === 'species'){
            arr.push(obj[key])
        } else if(typeof obj[key] === "object" &&  obj[key] !== null){
            getEvolutionChain(obj[key], arr)
        }
    }
    return arr.reverse()
};

export default getEvolutionChain
