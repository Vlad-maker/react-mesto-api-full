import React from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Login from "./Login";
import Register from "./Register";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Redirect, Route, Switch, useHistory } from "react-router";
import { authApiToken, authApi } from "../utils/Auth";

const App = (_) => {
  const history = new useHistory();
  const [isEditPlacePopupOpen, setIsEditPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatar] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfile] = React.useState(false);
  const [tooltip, setToolTip] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loadingOk, setLoadingOk] = React.useState(true);
  const [headerEmail, setHeaderEmail] = React.useState("");
  const [deleteCardsPopup, setDeleteCardsPopup] = React.useState(false);
  const [currentCardId, setCurrentCardId] = React.useState("");

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getInfo(), api.receiveCardsFromServer()])
        .then(([user, items]) => {
          setCurrentUser(user);
          setCards(items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i === currentUser._id);
    api
      .setLike(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }
  
  React.useEffect((_) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      authApiToken(jwt)
        .then((res) => {
          if (res.email) {
            setHeaderEmail(res.email);
            setLoggedIn(true);
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  });

  function handleRegisterUser(password, email) {
    setLoadingOk(true);
    authApi(password, email, "signup")
      .then((res) => {
        if (res) {
          setToolTip(true);
          history.push("/sign-in");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log(err);
        }
        setLoadingOk(false);
        setToolTip(true);
      });
  }
  function handleLoginUser(password, email) {
    authApi(password, email, "signin")
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          console.log(res.token);
          setLoggedIn(true);
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  }
  function logOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/sign-in");
  }
  function handleCardDelete() {
    api
      .deleteCard(currentCardId)
      .then((_) => {
        const newCardsList = cards.filter(
          (value) => currentCardId !== value._id
        );
        setCards(newCardsList);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleAddPlaceSubmit(name, link) {
    api
      .uploadCardsToServer(name, link)
      .then((item) => {
        setCards([item, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateUser(name, about) {
    api.editUserInfo(name, about).then((item) => {
      setCurrentUser(item);
      closeAllPopups();
    });
  }
  function handleUpdateAvatar(url) {
    api
      .editAvatar(url)
      .then((item) => {
        setCurrentUser(item);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleEditAvatarClick() {
    setIsEditAvatar(true);
  }
  function handleEditProfileClick() {
    setIsEditProfile(true);
  }
  function handleAddPlaceClick() {
    setIsEditPlace(true);
  }
  function handleConfirmClick(id) {
    setCurrentCardId(id);
    setDeleteCardsPopup(true);
  }
  function handleCardClick(props) {
    setSelectedCard({ status: true, title: props.name, links: props.link });
  }
  function closeAllPopups() {
    setIsEditAvatar(false);
    setIsEditProfile(false);
    setIsEditPlace(false);
    setToolTip(false);
    setDeleteCardsPopup(false);
    setSelectedCard({});
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header headerEmail={headerEmail} loggedIn={loggedIn} logOut={logOut} />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            setCards={setCards}
            handleCardLike={handleCardLike}
            handleCardDelete={handleConfirmClick}
          />
          <Route path="/sign-in">
            <Login handleLoginUser={handleLoginUser} />
          </Route>
          <Route path="/sign-up">
            <Register handleRegisterUser={handleRegisterUser} />
          </Route>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
          </Route>
        </Switch>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isEditPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <PopupWithForm isOpen={deleteCardsPopup} onClose={closeAllPopups} name="delete__cards" title="Вы уверены?">
          <button className="popup__button popup__delete_button" type="button" onClick={handleCardDelete}>Да</button>
          <button type="button" className="popup__close popup__delete_close_button"></button>
        </PopupWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <InfoTooltip isOpen={tooltip} onClose={closeAllPopups} loadingOk={loadingOk} cool={"Вы зарегистрировались!"} error={"Ошибка! Попробуйте ещё раз."}/>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
