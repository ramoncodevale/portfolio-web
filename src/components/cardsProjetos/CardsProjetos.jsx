import "./cardsProjetos.css"

const CardsProjetos = ({ descrimption, technologies, name, img, url }) => {
  return (
    <div className="card-projetos">
      <img src={img} alt={name} />
      <hr className="border" />
      <p>{technologies}</p>
      <hr className="border"/>
      <div className="card-content">
        <h3>{name}</h3>
      </div>
        <p>{descrimption}</p>
      <div className="btn-container">
        <a href={url}>
          <button>Ver Projeto</button>
        </a>
    </div>
      </div>
  )
}

export default CardsProjetos