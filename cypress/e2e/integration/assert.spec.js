/// <reference types="cypress"/>

it('Igualdade..', () => {
    const a = 1

    expect(a).equal(1)
    expect(a, 'Deveria ser 1').equal(1)
    expect(a).to.be.equal(1)
    expect(a).not.to.be.equal('b')

})

it('True and False..', () => {
    const a = true
    const b = null
    let c

    expect(a).to.be.true
    expect(true).to.be.true
    expect(false).to.be.true //espera-se erro
    expect(b).to.be.null
    expect(a).to.be.not.null
    expect(c).to.be.undefined
})

it('Equalidade de objeto..', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.eq(obj)
    expect(obj).to.be.equal({a: 1, b: 2}) //não funciona pois são referência distintas
    expect(obj).to.be.deep.equal({a: 1, b: 2}) // desta forma com o deep, verifica as propriedades do objetos.
    expect(obj).eql({a: 1, b: 2}) // é a forma curta da linha 37
    expect(obj).include({a: 1}) // desta forma, verifica apenas uma propriedade do objeto
    expect(obj).to.have.property('b') // verifica se contém a propriedade b
    expect(obj).to.have.property('b', ) // verifica se a propriedade b contém o valor 2
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})

it('Arrays..', () => {
    const arr = [1,2,3]

    expect(arr).to.have.members([1,2,3])
    expect(arr).to.have.members([1,3]) // apresenta erro
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Tipos..', () => {
    const num = 1
    const str = string

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String...', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/String/)
    expect(str).to.match(/^String/) // neste caso verificar que o inicial
    expect(str).to.match(/teste$/) // neste caso verificar que o final
    expect(str).to.match(/.{15}/)
    expect(str).to.match(/W+/) // para verificar se existe letras (+)-> 1 ou mais   
    expect(str).to.match(/D+/) // para verificar que não contém números
})

it('Números..', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3) // o resultado esperado é acima de 3
    expect(number).to.be.below(3) // o resultado esperado é abaixo de 7
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.21, 0.1) // o resultado experado é próximo de 5.21 | esse 0.1 é a precisão
})