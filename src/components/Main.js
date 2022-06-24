import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';


function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  

  // function handleCardLike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
    
  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  //   myApi.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
  //       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //   });
  // } 

  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__img"
          src={currentUser.avatar}
          alt={`${currentUser.name}`}
        />
        <button
          className="button_type_ava"
          onClick={props.onEditAvatar}
          title="Обновить аватар"
        />
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            aria-label="edit"
            className="button button_type_edit profile__edit-btn"
            onClick={props.onEditProfile}
          ></button>
          {/* <!-- поменять в css, настройках ссылки, жабу --> */}
          <p className="profile__about-me">{currentUser.about}</p>
        </div>
        <button
          type="button"
          aria-label="add"
          className="button button_type_add profile__add-btn"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((item) => (
            <Card
              key={item._id}
              link={item.link}
              name={item.name}
              likes={item.likes.length}
              card={item}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete = {props.onCardDelete }
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
