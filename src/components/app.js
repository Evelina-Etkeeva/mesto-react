import './index.css';
import logo from './images/vector.svg'
function App() {
    return (
      <div className="page">
        <header className="header">
          <img className="logo" src={logo} />
        </header>
        <main className="content">
          <section className="profile">
            <img className="profile__img-on-hover" />
            <img className="profile__img" alt="это ваше лицо" />
            <div className="profile__info">
              <h1 className="profile__name">опа</h1>
              <button type="button" aria-label="edit" className="button button_type_edit profile__edit-btn"></button>
              {/* <!-- поменять в css, настройках ссылки, жабу --> */}
              <p className="profile__about-me">жопа</p>
            </div>
            <button type="button" aria-label="add" className="button button_type_add profile__add-btn"></button>
          </section>
  
           <section className="elements">
  
            <ul className="elements__list">
            </ul>
          </section>
        </main>
  
        <footer className="footer">
          <p className="footer__copyright" lang="en">© 2022. Mesto Russia</p>
        </footer>
        {/* <!--элементы невидимые до поры--> */}
        <div className="popup popup_content_edit-profile">
          <div className="popup__forms-container">
            <button type="button" aria-label="close" className="button button_type_close popup__close-btn"></button>
            <form className="form form_content_edit-profile" name="profile-input" noValidate>
              <h2 className="form__header">Редактировать профиль</h2>
              <input type="text" className="form__item form__item_el_name" id="el-name" name="el-name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="form__span el-name-error"></span>
              <input type="text" className="form__item form__item_el_about-me" id="about-me" name="about-me" placeholder="О себе" minLength="2" maxLength="200" required />
              <span className="form__span about-me-error"></span>
              <button type="submit" className="button button_type_save popup__save-btn" value="Сохранить">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_content_add-card">
          <div className="popup__forms-container">
            <button type="button" aria-label="close" className="button button_type_close popup__close-btn"></button>
            <form className="form form_content_add-card" name="new-card-input" noValidate>
              <h2 className="form__header">Новое место</h2>
              <input type="text" className="form__item form__item_el_place-name" id="place-name" name="place-name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="place-name-error form__span"></span>
              <input type="url" className="form__item form__item_el_place-img" id="place-img" name="place-img" placeholder="Ссылка на картинку" required />
              <span className="place-img-error form__span"></span>
              <button type="submit" className="button button_type_save popup__save-btn" value="Сохранить">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_content_delete-card">
          <div className="popup__forms-container">
            <button type="button" aria-label="close" className="button button_type_close popup__close-btn"></button>
            <form className="form form_content_add-card" name="new-card-input" noValidate>
              <h2 className="form__header">Вы уверены?</h2>
              <button type="submit" className="button button_type_save popup__save-btn" value="Сохранить">Да</button>
            </form>
          </div>
        </div>
        <div className="popup popup_content_image">
          <div className="popup__image-content">
            {/* <img className="popup__img" src="/" alt="Изображение"> */}
            <span className="popup__title"></span>
            <button type="button" aria-label="close" className="button button_type_close popup__close-btn"></button>
          </div>
        </div>
        <div className="popup popup_content_edit-avatar">
          <div className="popup__forms-container">
            <button type="button" aria-label="close" className="button button_type_close popup__close-btn"></button>
            <form className="form form_content_edit-avatar" name="new-avatar-input" noValidate>
              <h2 className="form__header">Обновить аватар</h2>
              <input type="url" className="form__item form__item_el_avatar-img" id="avatar-img" name="avatar-img" placeholder="Ссылка на картинку" required />
              <span className="avatar-img-error form__span"></span>
              <button type="submit" className="button button_type_save popup__save-btn" value="Сохранить">Сохранить</button>
            </form>
          </div>
        </div>
        <template className="element-template">
          <li className="element">
            {/* <img className="element__image" src="/" alt="Изображение"> */}
            <h2 className="element__title"></h2>
            <button type="button" aria-label="like" className="button button_type_like element__like-btn"></button>
            <span className="element__like-counter" type="number">0</span>
            <button type="button" aria-label="delete" className="button button_type_delete button_status_invisible element__delete-btn" disabled></button>
          </li>
        </template>
      </div>
    );
  }
  
  export default App;
  