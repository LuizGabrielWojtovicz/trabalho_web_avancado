
const planos = [{
  "titulo":"Bronze",
  "preco":"R$20,00 por mês",
  "descricao":"sdsaddsda"
},
{
  "titulo":"Prata",
  "preco":"R$50,00 por mês",
  "descricao":"sdsaddsda"
},
{
  "titulo":"Ouro",
  "preco":"R$70,00 por mês",
  "descricao":"sdsaddsda"
}
]


export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {planos.map((plano, i) => (
          <div className="col" key={i}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-info">{plano.titulo}</h5>
                <h6 className="card-text">{plano.preco}</h6>
                <p className="card-text">{plano.descricao}</p>
                <a href={`...`}></a>
                <div className="btn btn-primary">
                    Adquirir
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}