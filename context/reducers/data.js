export function dataReducer(state, action) {
  switch (action.type) {
    case "SET_DATA_CARD":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
