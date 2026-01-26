export const SETS_THE_FETCH_REQUEST_DATA_CARDS = "устанавливает данные запроса на выборку карточки";
export const SETS_THE_FETCH_REQUEST_DATA_USER =  "устанавливает данные запроса на выборку пользователей";
export const SETS_THE_FETCH_REQUEST_DATA_POPOLAR_CARDS = "устанавливает данные запроса на выборку популярных карточек";
export const SETS_THE_FETCH_REQUEST_DATA_TOP_USER = "устанавливает данные запроса на выборку лучших пользователей";
export const SENDING_A_NEW_CARD_TO_BACK = "отправка новой карты на back";
export const UPLOAD_NFT_TO_BACK = "загрузка картинки в back";
export const UPLOAD_NEW_USSERS = "добавляем нового пользователя при регистрации"
export const LOGIN_AND_PASSWORD_CHECK = "отрпавка логина и пароля для проверки и входа"

export const fetchPopularCardsAction = (data) => ({
  type: SETS_THE_FETCH_REQUEST_DATA_POPOLAR_CARDS,
  payload: data,
});

export const fetchNewCardsAction = (data) => ({
  type: SENDING_A_NEW_CARD_TO_BACK,
  payload: data,
});

export const fetchTopUserAction = (data) => ({
  type: SETS_THE_FETCH_REQUEST_DATA_TOP_USER,
  payload: data,
});
export const fetchCardsAction = (data) => ({
  type: SETS_THE_FETCH_REQUEST_DATA_CARDS,
  payload: data,
});

export const fetchUserAction = (data) => ({
  type: SETS_THE_FETCH_REQUEST_DATA_USER,
  payload: data,
});
export const fetchUploadNftAction = (data) => ({
  type: UPLOAD_NFT_TO_BACK,
  payload: data,
});
export const pushUploadUsersAction = (data) => ({
  type: UPLOAD_NEW_USSERS,
  payload: data,
});
export const pushCheckUsersAction = (data) => ({
  type: LOGIN_AND_PASSWORD_CHECK,
  payload: data,
});
