function somaNumeros(arr){
    return arr.reduce((prev, current) => {
        return prev + current;
    })
}


const arr = [1, 2]

console.log(somaNumeros(arr));
