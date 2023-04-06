import "./card.css";

function Card({ image, name, description, category }) {
  const imageUrl = require(`assets/img/${image}`);
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    width: "300px",
    height: "300px",
  };

  return (
    <div className="card" style={divStyle}>
      <div className="card-header">
        <button className="icon card-header-icon">
          <img src="assets/img/thumbs-down.svg" alt="thumbs down"></img>
        </button>
        <p className="card-title">{name}</p>
      </div>
      <p className="card-description">{description}</p>
      <p className="category">{category}</p>
      <div className="card-buttons">
        <button className="icon button-up">
          <img src="assets/img/thumbs-up.svg" alt="thumbs up"></img>
        </button>
        <button className="icon button-down" aria-label="thumbs down">
          <img src="assets/img/thumbs-down.svg" alt="thumbs down"></img>
        </button>
        <button className="icon-vote">Vote now</button>
      </div>
      <div className="card-footer">
        <div className="percentage-approval">
          <img
            className="percentage-approval_icon"
            src="assets/img/thumbs-up.svg"
            alt="thumbs up"
          ></img>
          <span>25.5%</span>
        </div>
        <div className="percentage-rejection">
          <span>74.5%</span>
          <img
            className="percentage-rejection_icon"
            src="assets/img/thumbs-down.svg"
            alt="thumbs down"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
