import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://backoffice.zelazna.fr`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getArticle() {
    return apiClient.get("#1");
  },
};
