function Card(props){

  function handleClick(){
    props.onCardClick(props.card);
  }

    return(
        <li className="element">
        <img className="element__image" src={`${props.link}`}  alt={props.name} title="Посмотреть в полном размере" onClick={handleClick}></img>
        <h2 className="element__title">{props.name}</h2>
        <button type="button" aria-label="like" className="button button_type_like element__like-btn"></button>
        <span className="element__like-counter" type="number">{props.likes}</span>
        <button type="button" aria-label="delete" className="button button_type_delete button_status_invisible element__delete-btn" disabled></button>
      </li>
    )
}

export default Card;
