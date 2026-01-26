import {
  SETS_THE_FETCH_REQUEST_DATA_USER,
  SETS_THE_FETCH_REQUEST_DATA_TOP_USER,
  UPLOAD_NEW_USSERS,
  LOGIN_AND_PASSWORD_CHECK,

} from "../../store/actions";

const init = {
  users: [],
  topUsers: [],
};


const userReduser = (state = init, action) => {
  switch (action.type) {
    case SETS_THE_FETCH_REQUEST_DATA_USER:
      return {
        ...state,
        users: action.payload.data,
      };

    case SETS_THE_FETCH_REQUEST_DATA_TOP_USER:
      return {
        ...state,
        topUsers: action.payload.data,
      };
      case UPLOAD_NEW_USSERS:
        return{
        ...state,
        newUsers:action.payload.data,
        }
        case LOGIN_AND_PASSWORD_CHECK:
          return {
            ...state, 
            user: action.payload.data,
          }
    default:
      return state;
  }
};

export default userReduser;
