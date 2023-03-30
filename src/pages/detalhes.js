import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';

const filmes = [{
    "nome": "Vingadores",
    "genero": "Ação/Nerd",
    "foto":"vingadores.png",
    "duracao": "2H30",
    "sinopse":"Continuando as épicas aventuras cinematográficas iniciadas por Homem de Ferro, O Incrível Hulk, Homem de Ferro 2, Thor e Capitão América: O Primeiro Vingador, The Avengers – Os Vingadores da Marvel é uma reunião de super-heróis inédita. Quando um inesperado inimigo aparece e ameaça a segurança e a tranquilidade do mundo, Nick Fury, diretor da agência internacional de pacificação conhecida como SHIELD, se vê em busca de uma equipe capaz de tirar o mundo da iminência de um desastre. Através do planeta, um ousado recrutamento se inicia.",
    "descricao": "Filme da Marvel com super-heróis",
    "ano":"2010",
    "assistido": true,
    "nota": 5
},
{
    "nome": "Vingadores 2",
    "genero": "Ação/Nerd",
    "foto":"vingadores.png",
    "duracao": "2H30",
    "sinopse":"Continuando as épicas aventuras cinematográficas iniciadas por Homem de Ferro, O Incrível Hulk, Homem de Ferro 2, Thor e Capitão América: O Primeiro Vingador, The Avengers – Os Vingadores da Marvel é uma reunião de super-heróis inédita. Quando um inesperado inimigo aparece e ameaça a segurança e a tranquilidade do mundo, Nick Fury, diretor da agência internacional de pacificação conhecida como SHIELD, se vê em busca de uma equipe capaz de tirar o mundo da iminência de um desastre. Através do planeta, um ousado recrutamento se inicia.",
    "descricao": "Filme da Marvel com super-heróis",
    "ano":"2014",
    "assistido": true,
    "nota": 5
},
{
    "nome": "Vingadores 3",
    "genero": "Ação/Nerd",
    "foto":"vingadores.png",
    "duracao": "2H30",
    "sinopse":"Continuando as épicas aventuras cinematográficas iniciadas por Homem de Ferro, O Incrível Hulk, Homem de Ferro 2, Thor e Capitão América: O Primeiro Vingador, The Avengers – Os Vingadores da Marvel é uma reunião de super-heróis inédita. Quando um inesperado inimigo aparece e ameaça a segurança e a tranquilidade do mundo, Nick Fury, diretor da agência internacional de pacificação conhecida como SHIELD, se vê em busca de uma equipe capaz de tirar o mundo da iminência de um desastre. Através do planeta, um ousado recrutamento se inicia.",
    "descricao": "Filme da Marvel com super-heróis",
    "ano":"2015",
    "assistido": false,
    "nota": 5
}
]

function Assistido({ javisto }) {
    if (javisto) {
      return <p><b>Assisted:</b>Assistido ✔</p>;
    }
    return <p className="item"><b>Assisted:</b>Não assistido</p>;
  }

export default function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />               
            
            {(() => {
                if (filme == 'Vingadores') {
                    return (
                        <div className="container">
                            <div class="row align-items-start">
                            <div class="col">
                                <img src={'/assets/images/' + filmes[0].foto} alt={filmes[0].nome} className="card-img-top" />
                                </div>
                                <div className="col">
                                    <h5 className="card-title text-center"><p>Informações: </p></h5>
                                        <p className="card-text"><b>Name:</b> {filmes[0].nome}</p>
                                        <p className="card-text"><b>duraction:</b> {filmes[0].duracao}</p>
                                        <p className="card-text"><b>Genre:</b> {filmes[0].genero}</p>
                                        <p className="card-text"><b>synopsis:</b> {filmes[0].sinopse}</p>
                                        <p className="card-text"><b>Score:</b> {filmes[0].nota}</p>
                                        <Assistido javisto={filmes[0].assistido}/>
                                </div>
                                </div>
                                <Title title={"Comments"} text="" /> 
                                <Comments filme={filmes[0].nome} />
                            </div>
                       
                    )
                } else if (filme == 'Vingadores 2') {
                    return (
                        <div className="container">
                            <div class="row align-items-start">
                            <div class="col">
                                <img src={'/assets/images/' + filmes[1].foto} alt={filmes[1].nome} className="card-img-top" />
                                </div>
                                <div className="col">
                                    <h5 className="card-title"><p>Informações: </p></h5>
                                        <p className="card-text"><b>Name:</b> {filmes[1].nome}</p>
                                        <p className="card-text"><b>duraction:</b> {filmes[1].duracao}</p>
                                        <p className="card-text"><b>Genre:</b> {filmes[1].genero}</p>
                                        <p className="card-text"><b>synopsis:</b> {filmes[1].sinopse}</p>
                                        <p className="card-text"><b>Score:</b> {filmes[1].nota}</p>
                                        <Assistido javisto={filmes[1].assistido}/>
                                </div>
                                </div>
                                <Title title={"Comments"} text="" /> 
                                <Comments filme={filmes[1].nome} />
                            </div>
                    )
                } else {
                    return (
                        <div className="container">
                            <div class="row align-items-start">
                            <div class="col">
                                <img src={'/assets/images/' + filmes[2].foto} alt={filmes[2].nome} className="card-img-top" />
                                </div>
                                <div className="col">
                                    <h5 className="card-title"><p>Informações: </p></h5>
                                        <p className="card-text"><b>Name:</b> {filmes[2].nome}</p>
                                        <p className="card-text"><b>duraction:</b> {filmes[2].duracao}</p>
                                        <p className="card-text"><b>Genre:</b> {filmes[2].genero}</p>
                                        <p className="card-text"><b>synopsis:</b> {filmes[2].sinopse}</p>
                                        <p className="card-text"><b>Score:</b> {filmes[2].nota}</p>
                                        <Assistido javisto={filmes[2].assistido}/>
                                </div>
                                </div>
                                <Title title={"Comments"} text="" /> 
                                <Comments filme={filmes[2].nome} />
                            </div>
                    )
                }
            })()}
        </div>
    )
}
