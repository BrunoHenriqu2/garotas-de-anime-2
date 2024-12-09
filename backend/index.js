import express from "express"
//import dados from "./dados.js"

const app = express()

app.get("/", (req, res) => {

    let dados = [
        {
            titulo: "Yoshiko Hanabatake",
            descricao: "Yoshiko Hanabatake, a protagonista de Aho Girl, é simplesmente única. Uma garota que vive em seu próprio mundo, obcecada por bananas e com uma paixão desmedida por seu amigo de infância, Akkun. Yoshiko é a personificação da idiotice, fazendo coisas absurdas e hilárias em cada episódio, deixando todos ao seu redor perplexos e às vezes até irritados.",
            imagem: "imagens/Yoshiko-Hanabatake.png",
            link: "http://pt.wikipedia.org/wiki/Aho-Girl"
        },
        {
            titulo: "Noko Shikanoko",
            descricao: "Noko Shikanoko é uma personagem encantadora e peculiar do anime My Deer Friend Nokotan. Com sua aparência de cervo e personalidade gentil, Noko conquista o coração de todos ao seu redor.",
            imagem: "imagens/Noko-Shikanoko.png",
            link: "https://pt.wikipedia.org/wiki/My_Deer_Friend_Nokotan",
        },
        {
            titulo: "Rem",
            descricao: "Rem, uma das candidatas a esposa de Subaru Natsuki em Re:Zero, é conhecida por sua lealdade e habilidades de combate. Sua beleza e personalidade forte a tornam uma das personagens mais populares do anime.",
            imagem: "imagens/Rem.png",
            link: "https://pt.wikipedia.org/wiki/Re:Zero"
        },
        {
            titulo: "Alya",
            descricao: "Alya, de Ayla somethimes hides her feelings in russian, é uma garota misteriosa que esconde seus sentimentos por trás de uma fachada fria. Sua personalidade complexa e seus diálogos em russo a tornam uma personagem intrigante.",
            imagem: "imagens/Alya.png",
            link: "https://pt.wikipedia.org/wiki/Alya_Sometimes_Hides_Her_Feelings_in_Russian"
        },
        {
            titulo: "Rin Nanakura",
            descricao: "Rin Nanakura, de Pseudo Harem, é uma personagem excêntrica e apaixonada por jogos. Sua energia contagiante e sua personalidade divertida a tornam uma amiga leal e divertida.",
            imagem: "imagens/Rin-Nanakura.png",
            link: "https://dublagem.fandom.com/wiki/Pseudo_Harem"
        },
        {
            titulo: "Frieren",
            descricao: "Frieren, uma elfa imortal, é a protagonista de Frieren Beyond Journey's End. Após a morte de seus companheiros de aventura, Frieren embarca em uma jornada solitária, confrontando a mortalidade e o significado da vida. Sua sabedoria e poderes mágicos contrastam com sua aparente falta de emoções.",
            imagem: "imagens/Frieren.png",
            link: "https://pt.wikipedia.org/wiki/Frieren_e_a_Jornada_para_o_Al%C3%A9m",
        },
        {
            titulo: "Fern",
            descricao: "Fern é uma companheira de jornada de Frieren, em Frieren Beyond Journey's End. Conhecida por sua força física e personalidade direta. Apesar de sua aparência jovem, ela possui uma sabedoria e experiência consideráveis. Fern é leal a sua mestra e amigos.",
            imagem: "imagens/Fern.png",
            link: "https://pt.wikipedia.org/wiki/Frieren_e_a_Jornada_para_o_Al%C3%A9m",
        },
    ]
    
    res.send(dados)
})

app.listen(8082, () => {
    console.log("Servidor rodando na porta 8082!")
})