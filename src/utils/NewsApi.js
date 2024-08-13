import { APIkey } from "./constants";
import { processServerResponse } from "./utils";

export const getSearchResults = ({ keyword }) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${APIkey}`
  ).then((res) => processServerResponse(res));
};
