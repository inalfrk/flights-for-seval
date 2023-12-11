export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.047182",
    bl_lng: "24.992627",
    tr_lat: "42.705437",
    tr_lng: "44.549525",
    limit: "1000",
  },
  headers: {
    "X-RapidAPI-Key": "0271d8ddbbmshf552277e6a94190p14ffb5jsn0d02dc6efb44",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOptions = {
  headers: {
    "X-RapidAPI-Key": "0271d8ddbbmshf552277e6a94190p14ffb5jsn0d02dc6efb44",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
