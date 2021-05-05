import * as Types from "./actionTypes";

const initialState = {
  data: [],
  error: false,
  isLoading: false,
};

const fetchCovidData = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_COVID_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case `${Types.GET_COVID_DATA}.success`:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        error: false,
      };
    case `${Types.GET_COVID_DATA}.failed`:
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchCovidData;
