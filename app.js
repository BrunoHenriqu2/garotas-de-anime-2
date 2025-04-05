async function getData(pesquisa) {
                
    let titulo = ""
    let descricao = ""
    let resultado = ""

    await fetch("/api/dados.json", { method: "GET" })
        .then(response => response.json())
        .then(data => {

            for (let dado of data) {

                titulo = dado.titulo.toLowerCase()
                descricao = dado.descricao.toLowerCase()

                if (titulo.includes(pesquisa) || descricao.includes(pesquisa)) {

                    resultado = `
             <div class="item-resultado">
                 <h2>${dado.titulo}</h2>
                 <p class="descricao-meta">${dado.descricao}</p>
                 <img src="${dado.imagem}" alt="Uma foto de ${dado.titulo}">
                 <a href="${dado.link}" target="_blank">Mais informações sobre a obra da personagem</a>
             </div>
         `
                    break
                }
            }
        })

    return resultado
}

async function browse() {
    let section = document.querySelector("section#resultados-pesquisa")
    let campoPesquisa = document.querySelector("input#campo-pesquisa")

    let pesquisa = campoPesquisa.value.toLowerCase()
    let resultado = await getData(pesquisa)

    if (pesquisa === "") {
        resultado = "<p>Você não pesquisou nada, bocó!</p>"
    }

    if (resultado == "") { // Antigamente eu estava verificando se a variável era indefinida, mas tinha algumas garotas que eu peguei da mesma obra, então as vezes elas citavam os mesmos nomes na descrição ou no título. Eu troquei para verificar uma string vazia.
        resultado = "<p>Esta personagem não existe, ou não consta na minha base de dados super avançada de última geração!</p>"
    }
    section.innerHTML = resultado
}