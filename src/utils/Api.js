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
    return new Promise((resolve, reject) => resolve([
        {
            id: "6678e946f2bbcb300c6d893d",
            author: "Matt Giovanisci", 
            description: "I spent three years brewing one style of beer: The Hazy IPA. My goal was to homebrew a perfect hazy IPA recipe.",
            link: "https://www.brewcabin.com/hazy-ipa/",
            urlToImage: "https://www.brewcabin.com/wp-content/uploads/Hazy-IPA-on-The-Deck.jpg",
            publishedAt: "2024-03-26T07:54:38Z",
            content: "I spent three years brewing one style of beer: The Hazy IPA. My goal was to homebrew a perfect hazy IPA recipe.",
            keyword: "Hazy IPA",
        },
        {
            id: "6678ea9895565c2b4e1bcafc",
            author: "Angelo Kourkafas", 
            description: "Consumer Pulse Check: Lousy Mood, Tighter Budgets, but Spending Still Healthy.",
            link: "https://www.edwardjones.com/us-en/market-news-insights/stock-market-news/stock-market-weekly-update",
            urlToImage: "https://www.edwardjones.com/sites/default/files/styles/article_page_hero_image/public/acquiadam/2022-07/iStock-1163330465.jpg.webp?itok=yIMI-uKP",
            publishedAt: "2024-03-26T07:54:38Z",
            content: "Consumer Pulse Check: Lousy Mood, Tighter Budgets, but Spending Still Healthy.",
            keyword: "Stock market",
        },
        {
            id: "6678eb5bb5789a6ad965a4e4",
            author: "The Outbound Collective", 
            description: "Discover the best views in Virginia",
            link: "https://www.theoutbound.com/theoutbound/the-top-25-hikes-in-virginia",
            urlToImage: "https://images.theoutbound.com/uploads/1477966995876/9hb88ieri5odoqnq/549965daa905f96079ad00663cc3d84e?&fit=crop&w=970&q=60",
            publishedAt: "2024-03-26T07:54:38Z",
            content: "Discover the best views in Virginia.",
            keyword: "Hikes in Virigina",
        },
    ]))
}


export function addSavedArticle(newsData, keyword) {
    return new Promise((resolve, reject) => {
        resolve({
            id: "6678ec5339b48048c74ce6bb",
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
