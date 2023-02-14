const weatherReducer = (state = "", action) => {
  switch (action.type) {
    case "CHECKWEATHER":
      return (state = action.payload);
    default:
      return state;
  }
};
export default weatherReducer;
