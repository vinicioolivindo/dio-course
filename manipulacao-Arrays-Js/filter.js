function onlyPar(arr){
    return arr.filter(item => {
        if (item % 2 == 0){
            return item
        }
    })
}

const nums = [1, 2, 4, 5, 23, 6, 3]
console.log(onlyPar(nums));
