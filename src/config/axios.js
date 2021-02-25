import * as axios from "axios";
import { settings } from "./settings";

const instance = axios.create();
instance.defaults.baseURL = settings.API_URL;
instance.defaults.timeout = 20000;
// // instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers = {
  ContentType: "application/json",
  // Authorization: `Bearer ${API_KEY}`,
};

export { instance as default };
