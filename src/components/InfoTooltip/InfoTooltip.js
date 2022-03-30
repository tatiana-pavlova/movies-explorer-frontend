import './InfoTooltip.css';

function InfoTooltip (props) {
  return (
    <div className={`tooltip ${props.isOpen? "tooltip_opened": ""}`}>
      <div className="tooltip__container">
        <h2 className="tooltip__info-title">{props.title}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;