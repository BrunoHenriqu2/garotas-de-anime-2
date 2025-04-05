function getData(pesquisa) {
    fetch("/api/dados.json", { method: "GET" })
        .then(response => response.json())
        .then(data => {
            
            let titulo = ""
            let descricao = ""
            let resultado = ""

            for (let dado of data) {

                titulo = dado.titulo.toLowerCase()
                descricao = dado.descricao.toLowerCase()
                console.log(titulo.includes(pesquisa))
                if (titulo.includes(pesquisa) || descricao.includes(pesquisa)) {
                    console.log("Achei!")
                    let a = `
             <div class="item-resultado">
                 <h2>${titulo}</h2>
                 <p class="descricao-meta">${descricao}</p>
                 <img src="${dado.imagem}" alt="Uma foto de ${titulo}">
                 <a href="${dado.link}" target="_blank">Mais informações sobre a obra da personagem</a>
             </div>
         `
                    resultado = a
                    console.log(resultado)
                    return a
                }
            }
        })
}

function browse() {
    let section = document.querySelector("section#resultados-pesquisa")
    let campoPesquisa = document.querySelector("input#campo-pesquisa")

    let pesquisa = campoPesquisa.value.toLowerCase()
    let resultado = getData(pesquisa)

    if (pesquisa === "") {
        resultado = "<p>Você não pesquisou nada, bocó!</p>"
    }

    console.log(resultado)

    if (resultado == "") { // Antigamente eu estava verificando se a variável era indefinida, mas tinha algumas garotas que eu peguei da mesma obra, então as vezes elas citavam os mesmos nomes na descrição ou no título. Eu troquei para verificar uma string vazia.
        resultado = "<p>Esta personagem não existe, ou não consta na minha base de dados super avançada de última geração!</p>"
    }
    section.innerHTML = resultado
}