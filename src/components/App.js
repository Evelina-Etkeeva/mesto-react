import React, { useEffect } from 'react';
import './../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import myApi from '../utils/api';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard]= React.useState(null);

  useEffect(()=>{
    myApi.getInitialCards().then(data=>{
      setCards(data);
     });
    },[])
    

  useEffect(()=>{
    myApi.getUserData().then(user =>{
     setUserData(user)
    })
  },[])

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick(card){
    setSelectedCard(card);
  }
  
  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard(null);
  }
  
  function handleAddCardClick(){
    setIsAddCardPopupOpen(true);
  }

  return (
    <div className="page">
     <Header />
      <Main 
        onAddPlace={handleAddCardClick} 
        onEditAvatar ={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick} 
        userAvatar={userData.avatar}
        userDescription={userData.about}
        userName={userData.name}
        cards = {cards}
        onCardClick = {handleCardClick}
        />
      <Footer />
      {/* <!--элементы невидимые до поры--> */}
      <PopupWithForm 
        name="edit-profile"
        title = "Редактировать профиль"
        children={<> <input type="text" className="form__item form__item_el_name" id="el-name" name="el-name" placeholder="Имя" minLength="2" maxLength="40" required />
                  <span className="form__span el-name-error"></span>
                  <input type="text" className="form__item form__item_el_about-me" id="about-me" name="about-me" placeholder="О себе" minLength="2" maxLength="200" required />
                  <span className="form__span about-me-error"></span></>}
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        />
      <PopupWithForm 
        name="add-card"
        title = "Новое место"
        children={<> <input type="text" className="form__item form__item_el_place-name" id="place-name" name="place-name" placeholder="Название" minLength="2" maxLength="30" required /> 
                  <span className="place-name-error form__span"></span>
                  <input type="url" className="form__item form__item_el_place-img" id="place-img" name="place-img" placeholder="Ссылка на картинку" required />
                  <span className="place-img-error form__span"></span></>}
        isOpen = {isAddCardPopupOpen}
        onClose = {closeAllPopups}
        />
      <div className="popup popup_content_delete-card">
        <div className="popup__forms-container">
          <button type="button" aria-label="close" className="button button_type_close popup__close-btn"></button>
          <form className="form form_content_add-card" name="new-card-input" noValidate>
            <h2 className="form__header">Вы уверены?</h2>
            <button type="submit" className="button button_type_save popup__save-btn" value="Сохранить">Да</button>
          </form>
        </div>
      </div>
      <ImagePopup
      card ={selectedCard} 
      onClose = {closeAllPopups}/>
      <PopupWithForm 
        name="edit-avatar"
        title = "Обновить аватар"
        children={<> <input type="url" className="form__item form__item_el_avatar-img" id="avatar-img" name="avatar-img" placeholder="Ссылка на картинку" required />
                  <span className="avatar-img-error form__span"></span></>}
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        />


      
    </div>
  );
}

export default App;
