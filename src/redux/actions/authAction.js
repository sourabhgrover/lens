import store from "../store";
import lensApi from "../../apis/lensApi";
import {
  LOGIN_SUCCESS,
  GET_AUTHORIZATION_TOKEN,
  GET_REFRESH_TOKEN,
  LOGOUT,
} from "./type";
import { sendUserMessage } from "./chatAction";
import { FIRST_MESSAGE } from "../../utils/const";

const userLoginSucess = (googleObj) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: googleObj,
    });
    dispatch(getAccessToken());
  };
};

const getAccessToken = () => {
  const authState = store.getState().session;
  const accessToken = authState.user?.tokenObj?.access_token;
  const clientId = authState.user?.profileObj.googleId;
  return (dispatch) => {
    lensApi
      .post(
        "/getAccess",
        {
          accessToken,
          clientId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_AUTHORIZATION_TOKEN,
          });
          lensApi.defaults.withCredentials = true;
        }
      })
      .then(() => {
        dispatch(sendUserMessage(FIRST_MESSAGE, 0));
      })
      .catch((err) => console.log(err));
  };
};

const refreshAccessToken = () => {
  const authState = store.getState().session;
  const accessToken = authState.user?.tokenObj?.access_token;
  const clientId = authState.user?.profileObj.googleId;
  return (dispatch) => {
    lensApi
      .post(
        "/getAccess",
        {
          accessToken,
          clientId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_REFRESH_TOKEN,
          });
          // Get the last message from redux store
          const chat = store.getState().chat;
          const lastMessage =
            chat[chat.length - 1].messageBy === 1
              ? chat[chat.length - 1].userMessage
              : chat[chat.length - 2].userMessage;
          dispatch(sendUserMessage(lastMessage, 0));
        }
      })
      .catch((err) => console.log(err));
  };
};

const userLogout = () => {
  return (dispatch) => {
    lensApi
      .post("/logout", {}, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: LOGOUT,
          });
          lensApi.defaults.withCredentials = false;
        }
      })
      .catch((err) => console.log(err));
  };
};

export { userLoginSucess, userLogout, getAccessToken, refreshAccessToken };
