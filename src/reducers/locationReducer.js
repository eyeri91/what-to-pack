const locationReducer = (state = "", action) => {
  switch (action.type) {
    case "GETLOCATION":
      return (state = action.payload);
    // case "CHECKWEATHER":
    //   return state;
    // case "CHECKFORECAST":
    //   return state;
    default:
      return state;
  }
};

export default locationReducer;
