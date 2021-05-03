import axios from "axios";

//action type
const SET_TRANSLATION = "SET_TRANSLATION";

//action creator
export const setTranslate = (translation) => {
  return {
    type: SET_TRANSLATION,
    translation,
  };
};

//thunk creator
export const fetchTranslate = (text) => {
  return async (dispatch) => {
    try {
      const { data: translation } = await axios.post("/api/translator/", text);
      dispatch(setTranslate(translation));
    } catch (err) {
      console.log("Error fetching translation");
    }
  };
};

//reducer
export default function translator(state = "", action) {
  switch (action.type) {
    case SET_TRANSLATION:
      return action.translation;
    default:
      return state;
  }
}
