<<<<<<< HEAD
export const signUp = ({ email, password, username}) => {
    return fetch(`${baseUrl}/sugnup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username}),
    }).then(processServerResponse)
=======
import { processServerResponse } from "./utils";

const baseUrl = "http://localhost:3001";

export const authorization = (email, password ) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = ( token ) => {
  return new Promise((resolve, reject) => {
    resolve({ data: { name: "fake user", email: "fake@example.com", id: "fake-id" },
    });
  });
};

export const signUp = (email, password, username ) => {
  return new Promise((resolve, reject) => {
    resolve({ data: { name: "fake anem", email: "fake email", id: "fake-id"},
    });
  });
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
};