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
<<<<<<< Updated upstream
  getArticle() {
    return apiClient.get("#1");
  },
=======
  getArticles() {
    return apiClient.get("/api/articles");
  }
  // getArticle(id) {
  //   return apiClient.get("/api/article/" + id);
  // }
>>>>>>> Stashed changes
};
