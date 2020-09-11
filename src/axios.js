import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c402a.cloudfunctions.net/api",
});

export default instance;
