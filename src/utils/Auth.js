import { processServerResponse } from "./utils";

const baseUrl = "http://localhost:3001";

export const authorize = (email, password ) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = ( token ) => {
  return new Promise((resolve, reject) => {
    reseolve({ data: { name: "fake user", email: "fake@example.com", id: "fake-id" },
    });
  });
};

export const signUp = (email, password, username ) => {
  return new Promise((resolve, reject) => {
    resolve({ data: { username: "fake user", email: "fake@example.com", id: "fake-id "},
    });
  });
};