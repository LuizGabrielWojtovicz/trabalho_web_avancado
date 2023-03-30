
const about = {
  "logo": "logo.png",
  "dono":"Luiz",
  "data_desenvolvimento":"26/03/2023"
}

export default function About() {
  return (
    <div className="container">
      <div class="row align-items-start">
      <div class="col">
      <h5 className="card-title text-center"><p>Informações institucional da empresa: </p></h5>
                  <p className="card-text"><b>Desenvolvedor:</b> {about.dono}</p>
                  <p className="card-text"><b>Data de desenvolvimento:</b> {about.data_desenvolvimento}</p>   
          </div>
          <div className="col text-center">
          <img src={'/assets/images/' + about.logo} alt={`...`} className="card-img-top w-50 p-3" />
          </div>
          </div>
      </div>
  )
}