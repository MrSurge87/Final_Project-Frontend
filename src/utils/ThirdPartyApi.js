import { processServerResponse } from "./utils";

export const baseUrl = process.env.NODE_ENV === "production" 
? "http://api.newsexplorer.com" 
: "https://localhost:3001";



