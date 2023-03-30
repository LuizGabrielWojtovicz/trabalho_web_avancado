import { useParams } from 'react-router-dom';
import React from 'react';

const commentarios = [{
    "usuario": "mary",
    "comentario": "Muito bom, gostei demais!",
    "filme": "vingadores 2"
},
{
    "usuario": "mary",
    "comentario": "Muito bom, gostei muito!",
    "filme": "vingadores 3"
},
{
    "usuario": "mary",
    "comentario": "Muito bom, gostei!",
    "filme": "vingadores"
},
{
    "usuario": "Luiz",
    "comentario": "Divertido!",
    "filme": "vingadores 2"
},
{
    "usuario": "Luiz",
    "comentario": "Legal!",
    "filme": "vingadores 3"
},
{
    "usuario": "Luiz",
    "comentario": "Gostei!",
    "filme": "vingadores"
}
]


export default function Comments({ filme }) {
    let comentariosFilme;
    if(filme == 'Vingadores')
    {
        comentariosFilme = commentarios.filter(filmec =>
            filmec.filme === 'vingadores'
        );
        return (
            <div className="container text-center">
                <div className="row">
                    {comentariosFilme.map((comment, i) => (
                        <div className="col" key={i.toString()}>
                            <div className="card">
                            {comment.usuario + ": "}{comment.comentario}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    else if(filme == 'Vingadores 2')
    {
        comentariosFilme = commentarios.filter(filmec =>
            filmec.filme === 'vingadores 2'
        );
        return (
            <div className="container text-center">
                <div className="row">
                    {comentariosFilme.map((comment, i) => (
                        <div className="col" key={i.toString()}>
                            <div className="card">
                            {comment.usuario + ": "}{comment.comentario}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    else if(filme == 'Vingadores 3')
    {
        comentariosFilme = commentarios.filter(filmec =>
            filmec.filme === 'vingadores 3'
        );
        return (
            <div className="container text-center">
                <div className="row">
                    {comentariosFilme.map((comment, i) => (
                        <div className="col" key={i.toString()}>
                            <div className="card">
                            {comment.usuario + ": "}{comment.comentario}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    else
    {
        comentariosFilme = commentarios.filter(filmec =>
            filmec.filme === ''
        );
        return (
            <div className="container text-center">
                <div className="row">
                    {comentariosFilme.map((comment, i) => (
                        <div className="col" key={i.toString()}>
                            <div className="card">
                            {comment.usuario + ": "}'null'
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    
    
}