import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID iEepK_D857K1XFErY6ASTjRDCZJNtIYtinbhD2DASlc",
  },
});
