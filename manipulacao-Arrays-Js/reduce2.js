const lista = [
    {
        name: 'sabao',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    },
]

const saldo = 100;

function calculaSaldo(saldo, lista){
    return lista.reduce((prev, current, index) => {
        console.log('rodada', index+1);
        console.log({prev});
        console.log({current});
        
        return prev - current.preco
    }, saldo)
}

console.log(calculaSaldo(saldo, lista));
