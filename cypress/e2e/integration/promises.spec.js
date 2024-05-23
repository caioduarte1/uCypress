it ('sem testes, ainda.', () => { })

const getSomthing = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(13)
        },1000)
    })
}

const system = () =>{
    console.log ('init');
    getSomthing().then(some => {
        console.log(`Algo é ${something}`)
        // console.log("Algo é" + something)    -> mesma coisa da linha 14
    })
    console.log('fim')
}

system()