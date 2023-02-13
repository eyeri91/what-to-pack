const locationObjectParser = (input) => {
  const labels = input.label.split(" ");
  const latAndLon = input.value.split(" ");

  const locationObject = {
    city: labels[0],
    countryCode: labels[1],
    lat: latAndLon[0],
    lon: latAndLon[1],
  };
  return locationObject;
};

export default locationObjectParser;
