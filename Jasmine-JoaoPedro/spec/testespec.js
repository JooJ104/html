 // TESTESPEC.JS AQUI VAI FICAR O TESTE

//  it("Lista de Testes", function(){
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe(3);
//     expect(inteiro(4)).toBe(4);
//  })

// describe("Teste de números", function(){
//     it("Fizz Buzz", function(){
//         expect(jogo(1)).toBe(1);
//         expect(jogo(2)).toBe(2);
//         expect(jogo(3)).toBe("Fizz");
//         expect(jogo(4)).toBe(4);
//         expect(jogo(5)).toBe("Buzz");
//         expect(jogo(6)).toBe("Fizz");
//         expect(jogo(7)).toBe(7);
//         expect(jogo(8)).toBe(8);
//         expect(jogo(9)).toBe("Fizz");
//         expect(jogo(10)).toBe("Buzz");
//     })
// })

// describe("Teste de média", function(){
//     it("Resultado", function(){
//         let res = aluno();
//         expect(res).toEqual("Reprovado")
//     })
// })

// describe("Pessoas", function() {
//     let nome = "João";
//     let sobrenome = "Bueno";
//     let idade = 18;

//     let pessoa = new Pessoa(nome, sobrenome, idade);

//     it('Teste - Nome', function(){
//         expect("João").toBe(pessoa.nome())
//     })
//     it('Teste - Nome Completo', function(){
//         expect("João Bueno").toBe(pessoa.nome_completo())
//     })
//     it('Teste - Tudo', function(){
//         expect("João Bueno tem a idade de 18").toBe(pessoa.nome_tudo())
//     })
// })

//Ex.1
describe("Multiplicação de três argumentos", function(){
    let X = 10;
    let Y = 3;
    let Z = 4;

    let resultado = X * Y * Z;

    it('Resultado de ' + X + ' * ' + Y + ' * ' + Z +' = ' + resultado, function(){
        expect(resultado).toBe(resultado)
    })
})

// //Ex.2
describe("Divisão de dois números", function(){

    it('Teste de Divisão', function(){
        expect(divisao(10,0)).toBe("Não é possivel dividir por 0")
    })
})


//Ex.3
describe("Conversor de Graus", function(){
    it("Celsius para Fahrenheit", function(){
        expect(conversao(0,32)).toBe(0);
    })
    it("Fahrenheit para Celsius", function(){
        expect(conversao(0,32)).toBe(0);

    })
})

//Ex.4
it("Calcular média aritimética", function() {
    expect(calcularMedia(3, 4, 5)).toBe(4);
    expect(calcularMedia(10, 20, 30)).toBe(20)
})

//Ex.5
it("Contar caracteres", function() {
    expect(contarCaracteres("hello")).toBe(5);
    expect(contarCaracteres("12345")).toBe(5)
})

//Ex.6
it("Calculadora", function() {
    expect(calculadora(4, 2, "+")).toBe(6);
    expect(calculadora(4, 2, "/")).toBe(2)
})