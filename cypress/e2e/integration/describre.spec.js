/// <reference types="cypress"/>


//serve para criar um teste
it('Nome do teste: Um teste externo..', () => {

})

// Only serve para executar apenas este teste 
// ***Atenção** caso insira um Only após, pegará apenas o último only
it.only('Nome do teste: Um teste externo..', () => {

})

//server para agrupar teste
decribe.skip ('Deve conter gupo de teste', () => {
    //Sever para criar um grupo de teste dentro de um grupo de teste
    describe (' Deve agrupar teste mais específicos...', () => {
        //Este skip serve para que este teste não seja executado ou um grupo completo
        it.skip ('Um teste especifico...', () =>{
        
        })
    })

    it (' Um teste interno...', () => {

    })
})