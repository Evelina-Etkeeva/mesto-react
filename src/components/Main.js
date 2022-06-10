import Card from "./Card";
function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__img"
          src={props.userAvatar}
          alt={`${props.userName}`}
        />
        <button
          className="button_type_ava"
          onClick={props.onEditAvatar}
          title="Обновить аватар"
        />
        <div className="profile__info">
          <h1 className="profile__name">{props.userName}</h1>
          <button
            type="button"
            aria-label="edit"
            className="button button_type_edit profile__edit-btn"
            onClick={props.onEditProfile}
          ></button>
          {/* <!-- поменять в css, настройках ссылки, жабу --> */}
          <p className="profile__about-me">{props.userDescription}</p>
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
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
