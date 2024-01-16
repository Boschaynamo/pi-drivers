import { FILTER, GET_DRIVERS, TEAM_ORIGIN_ORDER_FILTER } from "./action-types";

const initialState = {
  drivers: [],
  allDrivers: [],
  filter: { team: "", origin: "API", order: "ASC" },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER:
      return { ...state, drivers: state.drivers }; //return new state with updated driver list

    case GET_DRIVERS:
      return { ...state, drivers: payload, allDrivers: payload };

    case TEAM_ORIGIN_ORDER_FILTER:
      const { team, origin, order } = payload;
      console.log({
        ...state,
        filter: { ...state.filter, [payload.who]: payload.data },
      });
      return {
        ...state,
        filter: { ...state.filter, [payload.who]: payload.data },
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
