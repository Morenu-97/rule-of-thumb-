import "./card.css";

function Card({image, name, description, category}) {
  const imageUrl = require(`assets/img/${image}`);
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    width: '300px',
    height: '300px',
  };

  return (
    <div className="card" style={divStyle}>
      <div className="title">
        <button className="icon-button-down">
          <img src="assets/img/thumbs-down.svg" alt="thumbs down"></img>
        </button>
        <p className="card-title">{name}</p>
      </div>
      <p className="card-description">{description}</p>
      <p className="category">{category}</p>
      <div>
        <button className="icon-button-up">
          <img src="assets/img/thumbs-up.svg" alt="thumbs up"></img>
        </button>
        <button className="icon-button-down" aria-label="thumbs down">
          <img src="assets/img/thumbs-down.svg" alt="thumbs down"></img>
        </button>
        <button className="icon-vote">Vote now</button>
      </div>
    </div>
  );
}

export default Card;
