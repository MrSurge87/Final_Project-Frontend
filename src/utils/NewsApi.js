import { APIkey, parseCurrentDate, parsePreviousWeek } from "./constants";
import { processServerResponse } from "./utils";

export const getSearchResults = (keyword) => {
  return fetch(
    `https://newsapi.org/v2/everthing?q=${keyword}&from=${parsePreviousWeek}&to=${parseCurrentDate}&pageSize=100&sortBy=popularity&apiKey=${APIkey}`
  ).then(processServerResponse);
};
