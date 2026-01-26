import {
  SETS_THE_FETCH_REQUEST_DATA_CARDS,
  SETS_THE_FETCH_REQUEST_DATA_POPOLAR_CARDS,
  SENDING_A_NEW_CARD_TO_BACK,
  UPLOAD_NFT_TO_BACK,
} from "../actions";

const init = {
  NewCards: [],
  cards: [],
  popularCards: [],
  loading: false,
  error: null,
  cardsPage: 1,
};

// Убраны глобальные переменные - они не нужны в Redux
const cardReduser = (state = init, action) => {
  switch (action.type) {
    case SETS_THE_FETCH_REQUEST_DATA_CARDS:
      return {
        ...state,
        cards: action.payload.data,
        loading: false,
        error: null,
      };

    case SETS_THE_FETCH_REQUEST_DATA_POPOLAR_CARDS:
      return {
        ...state,
        popularCards: action.payload.data,
      };

    case SENDING_A_NEW_CARD_TO_BACK:
      return {
        ...state,
        NewCards: action.payload.data,
        loading: false,
        error: null,
      };

    case UPLOAD_NFT_TO_BACK:
      return {
        ...state,
        NewCards: [...state.NewCards, action.payload],
      };
      default:
      return state;
  }
};

export default cardReduser;
