import { APIkey, parseCurrentDate, parsePreviousWeek } from "./constants";
import { processServerResponse } from "./utils";


export const getSearchResults = (keyword) => {
  const newsApi =
   fetch(
    `https://newsapi.org/v2/everthing?q=${keyword}&pageSize=100&sortBy=popularity&apiKey=${APIkey}`
  ).then((res) => {
    return processServerResponse(res);
  });
  return newsApi;
};
