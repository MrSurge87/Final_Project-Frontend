import { processServerResponse } from "./utils";

export const baseUrl = "http://localhost:3001";

export const removeSavedArticle = (selectedArticle) => {
  const token = localStorate.getItem("jwt");
  return fetch(`${baseUrl}/articles/${selectedArticle.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      aurhotization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

export function getSavedArticles() {
  return new Promise((reseolve, reject) => {
    resolvePath([
        {
            id: ,
            author: , 
            description: ,
            link: ,
            urlToImage: ,
            publishedAt: ,
            content: ,
            keyword: ,
        },
        {
            id: ,
            author: , 
            description: ,
            link: ,
            urlToImage: ,
            publishedAt: ,
            content: ,
            keyword: ,
        }
    ]);
  });
}

export function addSavedArticle(newsData, keyword) {
    return new Promise((resolve, reject) => {
        resolve({
            id: ,
            title: newsData.title,
            text: newsData.description,
            date: newsData.publishedAt,
            source: newsData.source.name,
            link: newsData.url,
            image: newsData.urlToImage,
            keyword: keyword,
        });
    });
};
