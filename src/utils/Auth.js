export const signUp = ({ email, password, username}) => {
    return fetch(`${baseUrl}/sugnup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username}),
    }).then(processServerResponse)
};