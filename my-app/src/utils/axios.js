import axios from "axios";

export const createAxiosInstance = (baseURL, headers) => {
  if (headers) {
    return axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_AIRTABLE_SECRET_KEYS}`,
        "Content-Type": "application/json",
      },
    });
  }

  return axios.create({
    baseURL,
  });
};

export const customFetchTourney = createAxiosInstance(
  "http://127.0.0.1:3000/api/v1/competition/",
);
