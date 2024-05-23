it('nada agora', function(){})

// function soma(a, b){
//     return a + b;
// }

// const soma = function(a, b){
//     return a + b
// }

// const soma = (a, b) => {
//     return a + b
// }

// const soma = (a, b) => a + b

// const soma = (a) => a + a

const soma = a => a + a

// const soma = () => 5 + 5

console.log(soma(1, 4))

// neste caso este funciona
it ('Uma função teste...', function(){
    console.log('Funtion', this)
})

//Neste caso, apresenta como undefine, ou seja, para este momento não serve
it ('Um arrow teste...', () =>{
    console.log('Funtion', this)
})
