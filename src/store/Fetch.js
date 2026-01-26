import {
  fetchCardsAction,
  fetchPopularCardsAction,
  fetchUserAction,
  fetchTopUserAction,
  fetchNewCardsAction,
} from "./actions";

export const fetchCards = (page) => {
  return async (dispatch, getState) => {
    fetch(`http://localhost:5000/cards?page=${page}`).then((response) =>
      response.json().then((data) => dispatch(fetchCardsAction(data)))
    );
  };
};
export const fetchPopularCards = () => {
  return async (dispatch, getState) => {
    fetch("http://localhost:5000/popularCards").then((response) =>
      response.json().then((data) => dispatch(fetchPopularCardsAction(data)))
    );
  };
};

export const fetchNewCards = () => {
  return async (dispatch, getState) => {
    fetch("http://localhost:5000/newcards")
      .then((q) => q.json())
      .then((i) => dispatch(fetchNewCardsAction(i)));
  };
};

export const fetchTable = () => {
  return async (dispatch, getState) => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => dispatch(fetchUserAction(data)));
  };
};

export const fetchTopUser = () => {
  return async (dispatch, getState) => {
    fetch("http://localhost:5000/topusers").then((response) =>
      response.json().then((data) => dispatch(fetchTopUserAction(data)))
    );
  };
};

export const createDataNft = (nftData) => {
  return async (dispatch, getState) => {
    fetch("http://localhost:5000/newcards", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ nft: nftData }),
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
      }); /*сюда приходит то что отправили с фронта*/
  };
};


export const createNewUsers = (nftData) => {
  return async (dispatch, getState) => {
    fetch("http://localhost:5000/newUser", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ nft: nftData }),
    })
    .then((response) => response.json())
    .then((data) => {
      debugger;
    }); /*сюда приходит то что отправили с фронта*/
  };
};

export const pushCheckLoginPassword = (Data) => {
  return async (dispatch, getState) => {
    fetch("http://localhost:5000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({user: Data }),
    })
      .then((response) => response.json())
      .then((data) => { 
     
      }); 
  };
};



// GET
// POST    headers body обязателое поле qery параметры
// PUT     headers body обязателое поле qery параметры
// DELETE
