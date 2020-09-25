import axios from "axios";
const KEY = "AIzaSyBVvaIlLwHCF1XAQYv1XV0KhhBhAkPTyys";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
