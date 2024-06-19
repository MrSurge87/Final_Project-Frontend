export const baseUrl = process.env.NODE_ENV === "production" 
? "https://" 
: "https://localhost:3001";

export const processServerResponse = (res) => {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Error.${res.status}`);
};