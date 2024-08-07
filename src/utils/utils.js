export const processServerResponse = (res) => {
<<<<<<< HEAD
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Error.${res.status}`);
=======
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
};