import { ADD_TO_FAVOURITES, DEL_FROM_FAVOURITES } from "../actions";

const initialState = {
  favourties: [],
  otherProp: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourties: [...state.favourties, action.payload],
      };
    case DEL_FROM_FAVOURITES:
      return {
        ...state,
        favourties: [
          ...state.favourties.filter((obj) => obj._id !== action.payload._id),
        ],
      };
    default:
      return state;
  }
};

export default mainReducer;
