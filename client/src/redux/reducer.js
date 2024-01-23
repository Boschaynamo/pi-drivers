import { FILTER, GET_DRIVERS, TEAM_ORIGIN_ORDER_FILTER } from "./action-types";

const initialState = {
  drivers: [],
  allDrivers: [],
  filter: { team: "", origin: "API", order: "ASC", dob: null },
  allTeams: ["-"],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER:
      return { ...state, drivers: state.drivers }; //return new state with updated driver list

    case GET_DRIVERS:
      return { ...state, drivers: payload, allDrivers: payload };

    case TEAM_ORIGIN_ORDER_FILTER:
      const obj = {
        ...state,
        filter: { ...state.filter, order: null, dob: null },
      };
      obj.filter[payload.who] = payload.data;
      if (payload.who !== "order" && payload.who !== "dob") {
        obj.filter.order = state.filter.order;
        obj.filter.dob = state.filter.dob;
      }

      if (payload.who === "team" && payload.data === "-") {
        obj.drivers = state.allDrivers;
      }
      return obj;

    case "SEARCH_BY_NAME":
      if (payload === "No driver found") {
        // window.alert('No driver found');
        return { ...state, drivers: [] };
      }
      return { ...state, drivers: payload };

    case "GET_ALL_TEAMS":
      return { ...state, allTeams: ["-"].concat(payload) };

    default:
      return { ...state };
  }
};

export default rootReducer;
