const forecastReducer = (state = "", action) => {
  switch (action.type) {
    case "CHECKFORECAST":
      return (state = action.payload);
    default:
      return state;
  }
};
export default forecastReducer;
